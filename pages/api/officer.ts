import { Officer } from '../../lib/types';
import { Coda } from 'coda-js';
import * as fs from 'fs';

/**
 * A HashMap of all the officers in org and their info.
 */
let OFFICERS_MAP: { [key: string]: Officer } = {};

/**
 * Fetch officer information.
 *
 * @param officerId The unique identifier for the officer
 */
export const getOfficer = async (officerId: string, fields?: string[]): Promise<Officer> => {
  await getAllOfficers();
  return OFFICERS_MAP[officerId];
};

/**
 * Return all officers.
 */
export const getAllOfficers = async (fields?: string[]): Promise<Officer[]> => {
  // If officers were previously parsed, then return those
  const prevOfficers = Object.keys(OFFICERS_MAP);
  if (prevOfficers.length != 0) {
    return Object.values(OFFICERS_MAP);
  }

  try {
    const CodaAPI = new Coda(process.env.NEXT_PUBLIC_CODA_OFFICER_API_KEY);
    const doc = await CodaAPI.getDoc('zWBpla6LLN'); // Grab AIS Personnel Doc from Coda API using the Doc ID
    const table = await doc.getTable('Officers Recordkeeping Table F24'); // Grab the actual table from the doc
    const rows = await table.listRows({ useColumnNames: true, valueFormat: 'rich' }); // Grab all the officer entries in the doc

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i].values;

      // Extract and validate each field from the row, removing backticks using regex
      const firstName = typeof row['First Name'] === 'string' ? row['First Name'].replace(/```/g, '').trim() : '';
      const lastName = typeof row['Last Name'] === 'string' ? row['Last Name'].replace(/```/g, '').trim() : '';

      const teamField = row['Team'];
      let team = '';
      if (Array.isArray(teamField) && teamField.length > 0) {
        team = teamField[0] ? teamField[0].replace(/```/g, '').trim() : '';
      } else if (typeof teamField === 'string') {
        team = teamField.replace(/```/g, '').trim();
      } 

      let ofemail = rows[i].values['AIS Email'];
      let ofgit = rows[i].values['GitHub Username'];
      let linkedIn = rows[i].values['LinkedIn'];
      let personal = rows[i].values['Personal Website'];
      let imageUrl = rows[i].values['Headshot Photo (Square Aspect Ratio)'];

      // Data cleaning and verifying - remove backticks from all fields if necessary
      if (typeof ofemail == 'string') {
        ofemail = ofemail.length != 0 ? ofemail.replace(/```/g, '').trim() : null;
      } else {
        ofemail = ofemail ? ofemail['url'] : null;
      }

      if (typeof ofgit == 'string') {
        ofgit = ofgit.length != 0 ? ofgit.replace(/```/g, '').trim() : null;
      } else {
        ofgit = ofgit ? ofgit['url'] : null;
      }

      if (typeof linkedIn === 'string') {
        linkedIn = linkedIn.trim();
      } else {
        linkedIn = null;
      }

      if (typeof personal == 'string') {
        personal = personal.length != 0 ? personal.replace(/```/g, '').trim() : null;
      } else {
        personal = personal ? personal['url'] : null;
      }

      if (typeof imageUrl == 'string') {
        imageUrl = imageUrl.length != 0 ? imageUrl.replace(/```/g, '').trim() : null;
      } else if (Array.isArray(imageUrl)) {
        if (imageUrl.length != 0) imageUrl = imageUrl[0]['url'];
        else imageUrl = null;
      } else {
        imageUrl = imageUrl ? imageUrl['url'] : null;
      }

      const officer: Officer = {
        name: `${firstName} ${lastName}`.trim(),
        title: rows[i].values['Title'] ? rows[i].values['Title'].replace(/```/g, '').trim() : '',
        team: team,
        dateJoined: null, // Join date is not part of the new table, setting as null
        email: ofemail,
        github: ofgit,
        linkedInUrl: linkedIn,
        personalWeb: personal,
        image: imageUrl,
        quote:
          rows[i].values['Quote for AIS Website'] && rows[i].values['Quote for AIS Website'].length != 0
            ? rows[i].values['Quote for AIS Website'].replace(/```/g, '').trim()
            : null,
      };

      if (officer.name) {
        OFFICERS_MAP[officer.name] = officer;
      }
    }

    // Create an offline backup if necessary
    storeOfficers();
  } catch (error) {
    console.log(error);
    console.log('Error No: ' + (error as any).errno);
    console.log('Error Code: ' + (error as any).code);
    console.log('!~could not get officer list from Coda : (');
    // Restore from an offline backup if necessary
    // retrieveOfficers();
  }

  return Object.values(OFFICERS_MAP);
};

function storeOfficers(): void {
  fs.writeFile('./pages/api/OfficersBackup.json', JSON.stringify(OFFICERS_MAP), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function retrieveOfficers(): void {
  try {
    const officers = fs.readFileSync('./pages/api/OfficersBackup.json');
    OFFICERS_MAP = JSON.parse(officers.toString());
    console.log('Restored officers from backup:', OFFICERS_MAP);
  } catch (error) {
    console.log('Failed to retrieve officers from backup:', error);
  }
}

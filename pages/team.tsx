import Head from 'next/head';
import * as React from 'react';
import OfficerItem from '../components/team/OfficerItem';
import { Officer } from '../lib/types';
import TeamItem from '../components/team/TeamItem';
import { getAllOfficers, getOfficer } from './api/officer';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { hexToRgb, Typography } from '@mui/material';


interface TeamPageProps {
  officers: Officer[];
}

const spacing = 0;
/**
 * A page that displays all officers in the organization.
 */
export default function TeamPage({ officers }: TeamPageProps) {
  const techTeam: Officer[] = [];
  const financeTeam: Officer[] = [];
  const industryTeam: Officer[] = [];
  const marketingTeam: Officer[] = [];
  const operationsTeam: Officer[] = [];
  const aimTeam: Officer[] = [];
  const execTeam: Officer[] = [];
  const hrTeam: Officer[] = [];
  const [value, setValue] = React.useState('All Members');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  for (const off of officers) {
    if (off['team'] == 'Executive Board') execTeam.push(off);
    else if (off['team'] == 'Industry') industryTeam.push(off);
    else if (off['team'] == 'Marketing') marketingTeam.push(off);
    else if (off['team'] == 'Operations') operationsTeam.push(off);
    else if (off['team'] == 'Finance') financeTeam.push(off);
    else if (off['team'] == 'Membership') hrTeam.push(off);
    else if (off['team'] == 'Technology') techTeam.push(off);
    else if (off['team'] == 'AIM') aimTeam.push(off);
  };

  return (
    <div>
      <Head>
        <title>Team &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="The officers of the Artificial Intelligence Society - the people who make this all possible."
        />
      </Head>
      <main className="min-h-screen bg-ais-new-beige text-hind subpixel-antialiased overflow-x-hidden">
        <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-10 md:py-20 ">
        </div>
        <section id="officers">
          <div className="text-7xl font-bold text-ais-new-med-blue mb-4 p-4 text-center">
            MEET THE TEAM
          </div>
          <div className="flex flex-grow flex-wrap -mt-10 pt-10 pb-8 gap-8 justify-around relative">
            {/* absolutes */}
            <img
              src="/team_blue_star.png"
              alt="Blue star"
              className="absolute bottom-10 -right-20 h-80 w-80"
            />
            <img
              src="/team_yellow_star.png"
              alt="Yellow star"
              className="absolute top-40 -left-20 h-60 w-60"
            />
            <TabContext value={value}>
              <Tabs value={value} onChange={handleChange} defaultValue={"All Members"} aria-label="teams" scrollButtons={true} centered className="w-full bg-ais-new-orange">
                <Tab value="All Members" label="All" />
                <Tab value="Executive Members" label="Executive" />
                <Tab value="Membership Members" label="Membership" />
                <Tab value="Operation Members" label="Operations" />
                <Tab value="Finance Members" label="Finance" />
                <Tab value="Technology Members" label="Technology" />
                <Tab value="Marketing Members" label="Marketing" />
                <Tab value="Industry Members" label="Industry" />
                <Tab value="AIM Members" label="AIM" />
              </Tabs>
              <TabPanel value="All Members">
                <div className="team-header text-center text-2xl font-bold text-ais-dark-blue">Executive Team</div>
                <TeamItem officers={execTeam} team={'Executive'} />

                <div className="team-header text-center text-2xl font-bold text-ais-dark-blue mt-40">Membership Team</div>
                <TeamItem officers={hrTeam} team={'Membership'} />

                <div className="team-header text-center text-2xl font-bold text-ais-dark-blue mt-40">Operations Team</div>
                <TeamItem officers={operationsTeam} team={'Operations'} />

                <div className="team-header text-center text-2xl font-bold text-ais-dark-blue mt-40">Finance Team</div>
                <TeamItem officers={financeTeam} team={'Finance'} />

                <div className="team-header text-center text-2xl font-bold text-ais-dark-blue mt-40">Technology Team</div>
                <TeamItem officers={techTeam} team={'Technology'} />

                <div className="team-header text-center text-2xl font-bold text-ais-dark-blue mt-40">Marketing Team</div>
                <TeamItem officers={marketingTeam} team={'Marketing'} />

                <div className="team-header text-center text-2xl font-bold text-ais-dark-blue mt-40">Industry Team</div>
                <TeamItem officers={industryTeam} team={'Industry'} />

                <div className="team-header text-center text-2xl font-bold text-ais-dark-blue mt-40">AIM Team</div>
                <TeamItem officers={aimTeam} team={'AIM'} />
              </TabPanel>
              <TabPanel value="Executive Members">
                <TeamItem officers={execTeam} team={'Executive'} />
              </TabPanel>
              <TabPanel value="Membership Members">
                <TeamItem officers={hrTeam} team={'Membership'} />
              </TabPanel>
              <TabPanel value="Operation Members">
                <TeamItem officers={operationsTeam} team={'Operations'} />
              </TabPanel>
              <TabPanel value="Finance Members">
                <TeamItem officers={financeTeam} team={'Finance'} />
              </TabPanel>
              <TabPanel value="Technology Members">
                <TeamItem officers={techTeam} team={'Technology'} />
              </TabPanel>
              <TabPanel value="Marketing Members">
                <TeamItem officers={marketingTeam} team={'Marketing'} />
              </TabPanel>
              <TabPanel value="Industry Members">
                <TeamItem officers={industryTeam} team={'Industry'} />
              </TabPanel>
              <TabPanel value="AIM Members">
                <TeamItem officers={aimTeam} team={'AIM'} />
              </TabPanel>
            </TabContext>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allOfficers = await getAllOfficers();
  //   [
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'coverImage',
  //   'excerpt',
  // ]

  return {
    props: {
      officers: allOfficers,
    },
  };
}

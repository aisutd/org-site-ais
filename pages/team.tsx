import Head from 'next/head';
import * as React from 'react';
import OfficerItem from '../components/team/OfficerItem';
import { Officer } from '../lib/types';
import TeamItem from '../components/team/TeamItem';
import { getAllOfficers } from './api/officer';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';

interface TeamPageProps {
  officers: Officer[];
}

/**
 * A page that displays all officers in the organization.
 */

export default function TeamPage({ officers }: TeamPageProps) {
  const techTeam: Officer[] = [];
  const financeTeam: Officer[] = [];
  const industryTeam: Officer[] = [];
  const marketingTeam: Officer[] = [];
  const operationsTeam: Officer[] = [];
  const aiTeam : Officer[] = [];
  const aimTeam: Officer[] = [];
  const execTeam: Officer[] = [];
  const aiAcademyTeam: Officer[] = [];
  const [value, setValue] = React.useState('All Members');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  officers.sort((a, b) => {
    // Executive team sorting
    if (a.team === 'Executive' && b.team === 'Executive') {
      // President always comes first
      if (a.title === 'President' && b.title !== 'President') return -1;
      if (a.title !== 'President' && b.title === 'President') return 1;
      // Vice-President comes after President
      if (a.title === 'Vice-President' && b.title !== 'Vice-President') return 1;
      if (a.title !== 'Vice-President' && b.title === 'Vice-President') return -1;
      // Secretary comes after President and Vice-President
      if (a.title === 'Secretary' && b.title !== 'Secretary') return 1;
      if (a.title !== 'Secretary' && b.title === 'Secretary') return -1;
      // Otherwise, sort by name
      return a.name < b.name ? -1 : 1;
    }
    // If only one is Executive, Executive comes first
    if (a.team === 'Executive') return -1;
    if (b.team === 'Executive') return 1;
    // Directors sorting
    if (a.title.includes('Director')) {
      if (b.title.includes('Director')) {
        return a.name < b.name ? -1 : 1;
      } else {
        return -1;
      }
    } else {
      return b.title.includes('Director') ? 1 : a.name < b.name ? -1 : 1;
    }
  });
    
  for (const off of officers) {
    if (off['team'] == 'Executive') execTeam.push(off);
    else if (off['team'] == 'Industry') industryTeam.push(off);
    else if (off['team'] == 'Marketing') marketingTeam.push(off);
    else if (off['team'] == 'Operations') operationsTeam.push(off);
    else if (off['team'] == 'Finance') financeTeam.push(off);
    else if (off['team'] == 'Technology') techTeam.push(off);
    else if (off['team'] == 'AI') aiTeam.push(off);
    else if (off['team'] == 'AIM') aimTeam.push(off);
    else if (off['team'] == 'AI Academy') aiAcademyTeam.push(off);
  }

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
      <main className="min-h-screen bg-ais-new-beige font-roboto subpixel-antialiased overflow-x-hidden pt-[5rem]">
        <section id="officers">
          <div className="text-7xl font-placard-bold tracking-wide text-ais-new-med-blue mb-4 p-4 text-center">
            MEET THE TEAMs
          </div>
          <div className="flex flex-grow flex-wrap -mt-10 pt-10 pb-8 gap-8 justify-around relative">
            <img
              src="/images/Shapes/team_blue_star.png"
              alt="Blue star"
              className="absolute bottom-5 -right-20 h-60 w-60"
            />
            <img
              src="/images/Shapes/team_yellow_star.png"
              alt="Yellow star"
              className="absolute top-40 -left-20 h-60 w-60"
            />

            <TabContext value={value}>
              <Tabs
                value={value}
                onChange={handleChange}
                defaultValue={'All Members'}
                aria-label="teams"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                className="w-full bg-ais-new-orange h-[3rem] lg:pl-[calc(50%-551px)]"
              >
                <Tab value="All Members" label="All" />
                <Tab value="Executive Members" label="Executive" />
                <Tab value="Operation Members" label="Operations" />
                <Tab value="Finance Members" label="Finance" />
                <Tab value="Technology Members" label="Technology" />
                <Tab value="Innovation Lab Members" label="Inno Lab" />
                <Tab value="Marketing Members" label="Marketing" />
                <Tab value="Industry Members" label="Industry" />
                <Tab value="AIM Members" label="AIM" />
              </Tabs>
              <TabPanel value="All Members">
                 {/* Display members of Executive Team */}
                <div className="text-center text-2xl font-roboto-bold text-ais-new-med-blue">Executive Team</div>
                <TeamItem officers={execTeam} team={'Executive'} />

                 {/* Display members of Operations Team */}
                <div className="text-center text-2xl font-roboto-bold text-ais-new-med-blue mt-40">Operations Team</div>
                <TeamItem officers={operationsTeam} team={'Operations'} />

                   {/* Display members of Finance Team */}
                <div className="text-center text-2xl font-roboto-bold text-ais-new-med-blue mt-40">Finance Team</div>
                <TeamItem officers={financeTeam} team={'Finance'} />

                   {/* Display members of a Super Cool Hot Sexy Smart Team */}
                <div className="text-center text-2xl font-roboto-bold text-ais-new-med-blue mt-40">Technology Team</div>
                <TeamItem officers={techTeam} team={'Technology'} />

                   {/* Display members of AI51 Team */}
                   <div className="text-center text-2xl font-roboto-bold text-ais-new-med-blue mt-40">Innovation Lab</div>
                <TeamItem officers={aiTeam} team={'AI51'} />

                   {/* Display members of Marketing Team */}
                <div className="text-center text-2xl font-roboto-bold text-ais-new-med-blue mt-40">Marketing Team</div>
                <TeamItem officers={marketingTeam} team={'Marketing'} />

                  {/* Display members of Industry Team */}
                <div className="text-center text-2xl font-roboto-bold text-ais-new-med-blue mt-40">Industry Team</div>
                <TeamItem officers={industryTeam} team={'Industry'} />

                  {/* Display members of AIM Team */}
                <div className="text-center text-2xl font-roboto-bold text-ais-new-med-blue mt-40">AIM Team</div>
                <TeamItem officers={aimTeam} team={'AIM'} />

                  {/* Display members of AI Academy Team */}
                <div className="text-center text-2xl font-roboto-bold text-ais-new-med-blue mt-40">AI Academy</div>
                <TeamItem officers={aiAcademyTeam} team={'AIM'} />

              
              
              </TabPanel>
              <TabPanel value="Executive Members">
                <TeamItem officers={execTeam} team={'Executive'} />
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
              <TabPanel value="Innovation Lab Members">
                <TeamItem officers={aiTeam} team={'AI51'} />
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
              <TabPanel value="AI Academy Members">
                <TeamItem officers={aiAcademyTeam} team={'AI Academy'} />
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

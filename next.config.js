module.exports = {
  async redirects() {
    return [
      {
        source: '/member/attendance',
        destination: 'https://coda.io/form/AIS-Event-Attendance-Form-S25_dDjLy_YnT1A',
        basePath: false,
        permanent: true,
      },
      {
        source: '/member/apply',
        destination: 'https://coda.io/form/AIS-Membership-Interest-Form_dEsa-S87Hwd',
        basePath: false,
        permanent: true,
      },
      {
        source: '/member/info',
        destination: 'https://docs.google.com/document/d/1hfI_WeyWj3W61npRw5AcZHHHVuafcoh-qTEAKTVCa20/edit',
        basePath: false,
        permanent: true,
      },
      //updated to F25
      {
        source: '/aim/apply',
        destination: 'https://coda.io/form/AIM-Fall-2025-Mentee-Application_dnGQ618RMkp/',
        basePath: false,
        permanent: false
      },
      //updated to F24
      {
        source: '/aim/info',
        //destination: 'https://docs.google.com/document/d/1hhLNZkQktB7XWIGm57CmPry1ZKM8Bn-ktTlpOmJkQXU/edit',
        destination: 'https://docs.google.com/document/d/1ht0ClJmdPNe2YbhcLEJJIphEwhImEI68xT9vPIE0SOE/edit',
        basePath: false,
        permanent: true,
      },
      {
        source: '/aim',
        destination: '/aim/info',
        basePath: false,
        permanent: true,
      },
      //updated to S24
      {
        source: '/aim/discord',
        destination: 'https://discord.gg/6rVUmAy54Z',
        basePath: false,
        permanent: true,
      },
      //updated to F24
      {
        source: '/aim/mentor/apply',
        //destination: 'https://coda.io/form/AIM-Mentor-Applications-F24_dTOVFZ-M_2c',
        destination: 'https://coda.io/form/AIM-Mentor-App-S25_d8M1RIaMfv3',
        basePath: false,
        permanent: true,
      },
      //updated to F24
      {
        source: '/aim/mentor/info',
        //destination: 'https://docs.google.com/document/d/1j0CbR1hqVepiN3KsbtuYUfrF3JUPv5KUCjaybusRoGo/edit',
        destination: 'https://docs.google.com/document/d/1tDf70VJE2XoWclNialSL5py5_5dJh1oNHvOTDKxQwxA/edit',
        basePath: false,
        permanent: true,
      },
      //updated to F24
      {
        source: '/officer/apply',
        //destination: 'https://coda.io/form/AIS-Officer-Application-F24_dY_jh9snDTK',
        destination: 'https://coda.io/form/AIS-Officer-Applications-S25_dLtJCE5nHlI',
        basePath: false,
        permanent: true,
      },
      //updated to F24
      {
        source: '/officer/info',
       // destination:'https://docs.google.com/document/d/1RfBhTp4NdrubXxo6IX7Vm4KDjKXXlCeXMCLsFaSm7M4/edit',
        destination:'https://docs.google.com/document/d/1B-bdjpBiUE-Ws3OOhgw4mUnKluBvTJGaP9C4NXfe4yk/edit',
        basePath: false,
        permanent: true,
      },
      //tech tank
      {
        source: '/tech-tank',
        destination: 'https://coda.io/d/Tech-Tank_dxYNkV0nCXo/Tech-Tank-Fall-2024-Info_suFjUyml#_luLNVmKN',
        basePath: false,
        permanent: true,
      },
      {
        source: '/tech-tank/register',
        destination: 'https://coda.io/form/AIS-Tech-Tank-Application_d18vqf155RP',
        basePath: false,
        permanent: true,
      },
      //socials
      {
        source: '/kickoff-s25',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLSdJdjHP82rgM6uXk_BdkkP3y3fJyLZQD2RNmMXK0UOc5kNVtQ/viewform',
        basePath: false,
        permanent: true,
      },
      {
        source: '/hackai/terms',
        destination:
          'https://docs.google.com/document/d/1zYOwR975UYSqGE-Wr31G6hngBBVVZG9FbKYTjxwDX2c/edit?usp=sharing',
        basePath: false,
        permanent: true,
      },
      {
        source: '/hackai/conduct',
        destination:
          'https://docs.google.com/document/d/1D8rrGkZV05XY0YnASF-fIyKc1Q9vUJyzYY--cRO2c00/edit?usp=sharing',
        basePath: false,
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/invite/7fZQZyP',
        basePath: false,
        permanent: true,
      },
      {
        source: '/disc',
        destination: 'https://discord.com/invite/7fZQZyP',
        basePath: false,
        permanent: true,
      },
      {
        source: '/dc',
        destination: 'https://discord.com/invite/7fZQZyP',
        basePath: false,
        permanent: true,
      },
      {
        source: '/fb',
        destination: 'https://www.facebook.com/aisutd',
        basePath: false,
        permanent: true,
      },
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/groups/aisutd',
        basePath: false,
        permanent: true,
      },
      {
        source: '/insta',
        destination: 'https://www.instagram.com/utdais',
        basePath: false,
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/utdais',
        basePath: false,
        permanent: true,
      },
      {
        source: '/ig',
        destination: 'https://www.instagram.com/utdais',
        basePath: false,
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/company/ais-utd',
        basePath: false,
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UCMkpr-CIpGEDfmgYmDh-Luw',
        basePath: false,
        permanent: true,
      },
      {
        source: '/yt',
        destination: 'https://www.youtube.com/channel/UCMkpr-CIpGEDfmgYmDh-Luw',
        basePath: false,
        permanent: true,
      },
    ];
  }
};

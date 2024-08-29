module.exports = {
  async redirects() {
    return [
      {
        source: '/member/attendance',
      //  destination: 'https://coda.io/form/AIS-Event-Attendance-Form_dYfH_vMZ_U8',
        destination: 'https://coda.io/form/AIS-Event-Attendance-Form-F24_dvXogtZ8LZD',
        basePath: false,
        permanent: true,
      },
      {
        source: '/member/apply',
        destination: 'https://coda.io/form/AIS-Membership-Interest-Form-F24_dOX652ni1B_',
        basePath: false,
        permanent: true,
      },
      {
        source: '/member/info',
        destination: 'https://docs.google.com/document/d/1DSYd55eOhPmkpzakcn_laEVkMcYZOZ0xZjX4HNhbuvo/edit',
        basePath: false,
        permanent: true,
      },
      //updated to F24
      {
        source: '/aim/apply',
        destination: 'https://coda.io/form/AIM-Mentee-Application-F24_d8Nf9j0sinV',
        basePath: false,
        permanent: true,
      },
      //updated to F24
      {
        source: '/aim/info',
        destination: 'https://docs.google.com/document/d/1hhLNZkQktB7XWIGm57CmPry1ZKM8Bn-ktTlpOmJkQXU/edit',
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
        destination: 'https://coda.io/form/AIM-Mentor-Applications-F24_dTOVFZ-M_2c',
        basePath: false,
        permanent: true,
      },
      //updated to F24
      {
        source: '/aim/mentor/info',
        destination: 'https://docs.google.com/document/d/1j0CbR1hqVepiN3KsbtuYUfrF3JUPv5KUCjaybusRoGo/edit',
        basePath: false,
        permanent: true,
      },
      //updated to F24
      {
        source: '/officer/apply',
        destination: 'https://coda.io/form/AIS-Officer-Application-F24_dY_jh9snDTK',
        basePath: false,
        permanent: true,
      },
      //updated to F24
      {
        source: '/officer/info',
        destination:
          'https://docs.google.com/document/d/1RfBhTp4NdrubXxo6IX7Vm4KDjKXXlCeXMCLsFaSm7M4/edit',
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

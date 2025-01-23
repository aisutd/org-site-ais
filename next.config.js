module.exports = {
  async redirects() {
    return [
      {
        source: '/member/attendance',
        destination: 'https://coda.io/form/AIS-Event-Attendance-Form_dYfH_vMZ_U8',
        basePath: false,
        permanent: true,
      },
      {
        source: '/member/apply',
        destination: 'https://coda.io/form/AIS-Membership-Interest-Form-Spring-2024_dOD_caSLbak',
        basePath: false,
        permanent: true,
      },
      {
        source: '/member/info',
        destination:
          'https://docs.google.com/document/d/10DimpEjMir8sgyJb6dKGGHHj5cIoNZP4KcQWdLKfrtM/edit',
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
      //updated to S24
      {
        source: '/aim/info',
        destination: 'https://docs.google.com/document/d/17CkhWdFdWq9dXzcr89jm_9y9HYVp4IauxA-LOzOUox4/edit',
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

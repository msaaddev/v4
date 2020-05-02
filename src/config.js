module.exports = {
  siteTitle: 'Saad Irfan | Software Engineer',
  siteDescription:
    'Saad leads one of the Google Student Communities — Developer Student Clubs (DSC) — at his varsity. By night, he dabbles with React.js, Gatsby.js, and Node.js. ',
  siteKeywords:
    'Saad Irfan, Saad, Irfan, msaaddev, software engineer, front-end engineer, web developer, javascript',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Saad Irfan',
  location: 'Toronto, Canada',
  email: 'mrsaadirfan@gmail.com',
  github: 'https://github.com/msaaddev',
  twitterHandle: '@msaaddev',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/msaaddev',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/msaaddev',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/msaaddev',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/msaaddev',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/msaaddev',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

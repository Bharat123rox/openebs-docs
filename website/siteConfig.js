const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: '' /* title for your website */,
  tagline: 'A website for OpenEBS Documentation',
  url: 'https://docs.openebs.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'OpenEBS',

  algolia: {
    apiKey: "dc657dfe30f42f228671f557f49ced7a",
    indexName: "openebs",
    inputSelector: "### REPLACE ME ####",
    debug: true
    },

    headerLinks: [
       
        {
            search: true
        },
    //{page: 'help', label: 'Help'},
  ],
  users,
  onPageNav: 'separate',
  editUrl: 'https://github.com/openebs/openebs-docs/edit/0.6/docs/',
  /* path to images for header/footer */
  headerIcon: 'img/openebs-logo.svg',
  favicon: 'img/favicon.ico',
  /* colors for website */
  colors: {
    primaryColor: '#f1584d',
    secondaryColor: '#205C3B',
  },
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-blocks-buttons.js',
  ],
  stylesheets: [
    '/css/code-blocks-buttons.css',
  ],
};

module.exports = siteConfig;

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
 const sidebars = {
  docsSidebar: [
      
      {
          type: 'category',
          label: 'Overview',
          link: {
            type: 'generated-index',
            title: 'Overview',
            description: 'Learn all about the documentation of the Plastic Scanner!',
            slug: '/',
            keywords: ['guides'],
            image: '/img/docusaurus.png',
          },
          collapsible: false,
          items: [
              'introduction',
              'how_it_works',
              {
                  type: 'category',
                  label: 'Development Board',
                  link: {
                      type: 'generated-index',
                      title: 'Development Board 2.3', 
                      description: 'Learn all about the development board!',
                      slug: '/DB2.3_overview',
                      // id: 'boards/DB2.2'
                  },
                  collapsed: false,
                  //collapsible: false,
                  items: [
                      'boards/DB2.3',
                      'boards/DB2.3_build',
                      'boards/DB2.x_firmware',
                      'boards/DB2.x_software'
                  ]
              },
              {
                  type: 'category',
                  label: 'Handheld scanner',
                  link: {
                      type: 'generated-index',
                      title: 'Handheld Scanner', 
                      description: 'To be added in the future!',
                      slug: '/HS_overview',
                      // id: 'boards/DB2.2'
                  },
                  collapsed: true,
                  //collapsible: false,
                  items: [
                       'boards/HS',
                      // 'boards/HS_build',
                      // 'boards/HS_firmware',
                      // 'boards/HS_software'
                  ]
              },
              'revision_history',
              'research',
              // 'data',
              'contributing'],
        },
      // 'how_it_works',
      // {
      //     type: 'category',
      //     label: 'Development Board 2.2',
      //     link: {
      //         type: 'doc', 
      //         id: 'boards/DB2.2'},
      //     collapsible: false,
      //     items: [
      //         'boards/DB2.2_build',
      //         'boards/DB2.x_firmware',
      //         'boards/DB2.x_software'
      //     ]
      // },
      // 'revision_history',
      // 'data',
      // 'contributing',
      // 'notes',
      // 'development_milestones',
      // 'glossary'
  ]
};

export default sidebars;

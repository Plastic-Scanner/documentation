// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docsSidebar: [
        
        {
            type: 'category',
            label: 'Overview',
            link: {
              type: 'generated-index',
              title: 'Overview',
              description: 'Learn about the most important Docusaurus concepts!',
              slug: '/overview',
              keywords: ['guides'],
              image: '/img/docusaurus.png',
            },
            collapsible: false,
            items: [
                'introduction',
                'how_it_works',
                {
                    type: 'category',
                    label: 'Development Board 2.2',
                    link: {
                        type: 'doc', 
                        id: 'boards/DB2.2'},
                    collapsible: false,
                    items: [
                        'boards/DB2.2_build',
                        'boards/DB2.x_firmware',
                        'boards/DB2.x_software'
                    ]
                },
                'revision_history',
                'data',
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

module.exports = sidebars;

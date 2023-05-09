// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docsSidebar: [
        'introduction',
        'how_it_works',
        {
            type: 'category',
            label: 'Development Board 2.2',
            link: {type: 'doc', id: 'boards/DB2.2'},
            collapsible: false,
            items: [
                'boards/DB2.2_build',
                'boards/DB2.x_firmware',
                'boards/DB2.x_software'
            ]
        },
        // 'notes',
        // 'development_milestones',
        'revision_history',
        'data',
        'contributing',
        // 'glossary'
    ]
};

module.exports = sidebars;

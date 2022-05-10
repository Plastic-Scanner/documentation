// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docsSidebar: [
        'introduction',
        'how_it_works',
        {
            type: 'category',
            label: 'Development Board 2.1',
            link: {type: 'doc', id: 'boards/DB2.1'},
            collapsible: false,
            items: [
                'boards/DB2.1_build',
                'boards/DB2.x_firmware'
            ]
        },
        'revision_history',
        'contributing',
        'glossary'
    ]
};

module.exports = sidebars;

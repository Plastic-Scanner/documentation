// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docsSidebar: [
        'introduction',
        'how_it_works',
        {
            type: 'category',
            label: 'PCB revisions',
            collapsible: true,
            collapsed: false,
            items: [
                'boards/pcb_revisions',
                'boards/DB2.0',
            ]
        },
        'contribution',
        'glossary',
        'faq',
    ]

};

module.exports = sidebars;

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
            collapsed: true,
            items: [
                'boards/pcb_revisions',
                'boards/DB2.0',
            ]
        },
        {
            type: 'category',
            label: 'Building',
            collapsible: true,
            collapsed: true,
            items: [
                'build/before-you-begin',
                'build/electrical-assembly',
                'build/mechanical-assembly',
                'build/software',
                'build/troubleshooting',
                'build/usage',
            ]
        },
        'contribution',
        'glossary',
        'faq',
    ]

};

module.exports = sidebars;

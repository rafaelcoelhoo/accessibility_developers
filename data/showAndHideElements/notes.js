export const notes = {
    hideAndShowElements: {
        tips: [
            'Check accessibility tree',
            'Navigate by tab',
            'Navigate by elements',
        ],
    },
    hideAndShowFromSight: {
        tips: [
            'Check accessibility tree',
            'Navigate by tab',
            'Navigate by elements',
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://www.tpgi.com/screen-readers-support-for-text-level-html-semantics/',
                        label: 'TPGI - Screen reader support for text level HTML semantics',
                    },
                ]
            }
            ]
    },
    hideAndShowElementsExercise: {
        tips: [
            'Add a <code>&lt;span&gt;</code> with class <code>visually-hidden</code> to the <code>&lt;del&gt;</code> element',
            'Add to this new <code>&lt;span&gt;</code> the text "Price was: "',
            'Add a <code>&lt;span&gt;</code> with class <code>visually-hidden</code> to the <code>&lt;ins&gt;</code> element',
            'Add to this new <code>&lt;span&gt;</code> the text "Price: "'
        ],
    },
    hideAndShowElementsExamples: {
        tips: [],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://portugaldigital.gov.pt/',
                        label: 'Portugal Digital',
                        extraInformation: 'Menu with extra labels on search option, using <code>sr-only</code> unnecessary'
                    },
                    {
                        url: 'https://my.vodafone.pt/main.html',
                        label: 'Vodafone',
                        extraInformation: 'Menu with duplicated labels on search option, using <code>visually-hidden</code> unnecessary',
                        hide: true
                    },
                    {
                        url: 'https://www.cgd.pt/Particulares/Pages/Particulares_v2.aspx',
                        label: 'CGD',
                        extraInformation: 'Caixadirecta menu option is using the height property to control the submenu,(<code>direct-wrapper</code>)'
                    },
                    {
                        url: 'https://www.worten.pt/promocoes',
                        label: 'Worten',
                        extraInformation: 'Products menu using opacity'
                    },
                    {
                        url: 'https://academia.ama.gov.pt/',
                        label: 'Academia AMA - Sidebar',
                        extraInformation: 'Hamburger menu - Content at the end of the page hidden with off screen',
                        hide: true
                    },
                    {
                        url: 'https://www.portovivosru.pt/',
                        label: 'Porto SRU',
                        extraInformation: 'Porto town hall - The dropdown at the top is in the accessibility tree',
                        hide: true
                    },
                    {
                        url: 'https://www.13.cl/',
                        label: '13 channel',
                        extraInformation: 'RADIOS menu options is visible for keyboard users',
                        hide: true
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.publico.pt/antonio-costa',
                        label: 'Público',
                        extraInformation: 'Menu container using <code>display-none</code>'
                    },
                    {
                        url: 'https://www.apple.com/shop/accessories/all',
                        label: 'Apple',
                        extraInformation: 'Search accessories reset button text on input'
                    },
                    {
                        url: 'https://www.ikea.com/pt/pt/this-is-ikea/',
                        label: 'Ikea - Create account',
                        extraInformation: 'Create account link is hiding the button because it is redundant, they already have the link',
                        hide: true
                    },
                    {
                        url: 'https://www.ikea.com/pt/pt/p/malm-comoda-c-6-gavetas-branco-60403584/?gclid=Cj0KCQiA14WdBhD8ARIsANao07ioMEBJ-1pkEmU5Of_YdoiWpSFqGITg3visx1LJltRd4GVBrsxolooaArNqEALw_wcB',
                        label: 'Ikea - Malm product',
                        extraInformation: [
                            'The rating component is hiding the stars (but could be improved the number of reviews, as it is duplicated in the button name)',
                            'Add <code>aria-hidden</code> to the number of comments'
                        ]
                    },
                    {
                        url: 'https://www.gov.uk/',
                        label: 'Gov UK',
                        extraInformation: 'Search menu and logo',
                        hide: true
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                        label: 'Transparência Gov',
                        extraInformation: 'List of contents - Section with graphics',
                        hide: true
                    },
                    {
                        url: 'https://www.scottohara.me/',
                        label: 'Scott O\'Hara',
                        extraInformation: 'Logo text',
                        hide: true
                    },
                    {
                        url: 'https://www.wildcodeschool.com/pt-PT/cursos/web-developer-bootcamp-3-meses',
                        label: 'Wild Code School',
                        extraInformation: 'Campus menu option - Using visibility hidden',
                        hide: true
                    },
                ],
            },
        ],
    }
}

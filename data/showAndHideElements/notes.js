export const notes = {
    hideAndShowElements: {
        tips: [
            'Check accessibility tree',
            'Navigate by tab',
            'Navigate by elements',
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
                        extraInformation: 'Caixadirecta menu option is using height to control the submenu,(<code>direct-wrapper</code>)'
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
                        extraInformation: 'Porto town hall - The dropdown at the top is in the accessibility tree'
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
                        extraInformation: 'The rating component is hiding the stars (but could be improved the number of reviews, as it is duplicated in the button name)'
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
                        extraInformation: 'List of contents - Section with graphics'
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

export function getDataByKey (key) {
    return {...notes[key]};
}

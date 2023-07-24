export const notes = {
    hideAndShowElements: {
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
                        label: 'Portugal Digital',
                        extraInformation: 'Menu with duplicated labels on search option, using <code>visually-hidden</code> unnecessary'
                    },
                    {
                        url: 'https://www.cgd.pt/Particulares/Pages/Particulares_v2.aspx',
                        label: 'CGD',
                        extraInformation: 'Caixadirecta menu option is using height to control the submenu,(<code>direct-wrapper</code>)'
                    },
                    {
                        url: 'https://academia.ama.gov.pt/',
                        label: 'Academia AMA - Sidebar',
                        extraInformation: 'Hamburger menu - Content at the end of the page hidden with off screen'
                    },
                    {
                        url: 'https://www.13.cl/',
                        label: '13 channel',
                        extraInformation: 'RADIOS menu options is visible for keyboard users '
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.wacoal-america.com/elevated-allure-wire-free-bra-852336',
                        label: 'Wacoal',
                        extraInformation: 'Rating component'
                    },
                    {
                        url: 'https://www.ikea.com/pt/pt/p/malm-comoda-c-6-gavetas-branco-60403584/?gclid=Cj0KCQiA14WdBhD8ARIsANao07ioMEBJ-1pkEmU5Of_YdoiWpSFqGITg3visx1LJltRd4GVBrsxolooaArNqEALw_wcB',
                        label: 'Ikea',
                        extraInformation: 'Rating component'
                    },
                    {
                        url: 'https://www.gov.uk/',
                        label: 'Gov UK',
                        extraInformation: 'Search menu and logo'
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                        label: 'Transparência Gov',
                        extraInformation: 'List of contents - Section with graphics'
                    },
                    {
                        url: 'https://www.scottohara.me/',
                        label: 'Scott O\'Hara',
                        extraInformation: 'Logo text'
                    },
                    {
                        url: 'https://www.wildcodeschool.com/pt-PT/cursos/web-developer-bootcamp-3-meses',
                        label: 'Wild Code School',
                        extraInformation: 'Campus menu option - Using visibility hidden'
                    },
                ],
            },
        ],
    }
}

export function getDataByKey (key) {
    return {...notes[key]};
}

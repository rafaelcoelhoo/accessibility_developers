export const notes = {
    hideAndShowElements: {
        tips: [],
        live_examples: [
            {
                url: 'https://portugaldigital.gov.pt/',
                label: 'Portugal Digital - Extra labels'
            },
            {
                url: 'https://academia.ama.gov.pt/',
                label: 'Academia AMA - Sidebar'
            },
            {
                url: 'https://www.wacoal-america.com/elevated-allure-wire-free-bra-852336',
                label: 'Wacoal - Rating component'
            },
            {
                url: 'https://www.ikea.com/pt/pt/p/malm-comoda-c-6-gavetas-branco-60403584/?gclid=Cj0KCQiA14WdBhD8ARIsANao07ioMEBJ-1pkEmU5Of_YdoiWpSFqGITg3visx1LJltRd4GVBrsxolooaArNqEALw_wcB',
                label: 'Ikea - Rating component'
            },
            {
                url: 'https://www.gov.uk/',
                label: 'Gov UK - Search menu and logo'
            },
            {
                url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                label: 'Transparência Gov - List of contents - Section with graphics'
            },
            {
                url: 'https://www.13.cl/',
                label: '13 channel - Radios'
            },
            {
                url: 'https://www.scottohara.me/',
                label: 'Scott O\'Hara - Logo'
            },
        ],
    }
}

export function getDataByKey (key) {
    return {...notes[key]};
}

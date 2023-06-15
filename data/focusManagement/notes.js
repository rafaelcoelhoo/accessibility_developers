export const notes = {
    focus: {
        tips: [
            '<code>outline: 0</code>',
            'Focus versus focus visible',
        ],
        live_examples: [
            {
                url: 'https://expresso.pt/',
                label: 'Expresso'
            },
            {
                url: 'https://www.coverflex.com/pt',
                label: 'Coverflex'
            },
            {
                url: 'https://feed.continente.pt/',
                label: 'Continente'
            },
            {
                url: 'https://www.olx.pt/',
                label: 'Olx'
            },
            {
                url: 'https://getbootstrap.com/docs/5.0/components/buttons/',
                label: 'Bootstrap - Contrast'
            },
            {
                url: 'https://www.gov.uk/',
                label: 'Gov UK'
            },
            {
                url: 'https://makeitfable.com/',
                label: 'Fable'
            }
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

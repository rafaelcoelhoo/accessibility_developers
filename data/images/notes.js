export const notes = {
    decorativeImages: {
        tips: [
            'Navigate by images - <code>VO + Command + G</code>',
            'Have a look at the accessibility tree',
            "Remove alt attribute and check the accessibility tree"
        ],
        live_examples: [
            {
                url: 'https://www.w3.org/WAI/tutorials/images/decision-tree/',
                label: 'W3 - alt Decision Tree',
            },
            {
                url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                label: 'Transparência - Background image',
            },
            {
                url: 'https://mosaico.gov.pt/servicos-publicos-digitais',
                label: 'Mosaico - Background image and search modal (owl image)',
            },

        ],
    },
    informativeImages: {
        tips: [
            'Navigate by images - <code>VO + Command + G</code>',
            'Have a look at the accessibility tree',
        ],
        live_examples: [
            {
                url: 'https://www.worten.pt/dicas-como-escolher/como-escolher-fritadeira',
                label: 'Worten - Not meaningful alt',
            },
            {
                url: 'https://www.starbucksathome.com/pt/artigo/sobre-nos',
                label: 'Starbucks - Not meaningful alt',
            }
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

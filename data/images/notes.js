export const notes = {
    decorativeImages: {
        tips: [
            'Navigate by images - <code>VO + Command + G</code>',
            'Have a look at the accessibility tree',
            "Remove alt attribute and check the accessibility tree"
        ],
        live_examples: [
            {
                url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                label: 'Transparência - Background image',
            },
            {
                url: 'https://mosaico.gov.pt/servicos-publicos-digitais',
                label: 'Mosaico - Background image',
            }
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

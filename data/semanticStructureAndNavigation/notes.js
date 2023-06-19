export const notes = {
    pageTitle: {
        tips: [
            'List all opened tabs <code>VO + I</code>',
            'Navigate by tabs <code>VO + Right/Left Arrow</code>',
        ],
        live_examples: [
            {
                url: 'https://www.estgv.ipv.pt/estgv/?',
                label: 'ESTGV',
            },
            {
                url: 'https://www.esev.ipv.pt/posgrad.aspx',
                label: 'ESEV',
            },
            {
                url: 'https://www.uevora.pt/investigar',
                label: 'University Evora',
            },
            {
                url: 'https://www.gov.uk/search/all?order=relevance',
                label: 'Gov UK - Search',
            },
            {
                url: 'https://mosaico.gov.pt/homepage',
                label: 'Mosaico',
            },
        ],
    },
    languages: {
        tips: [
        ],
        live_examples: [
            {
                url: 'https://mosaico.gov.pt/plano-de-evolucao',
                label: 'Mosaico',
            },
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

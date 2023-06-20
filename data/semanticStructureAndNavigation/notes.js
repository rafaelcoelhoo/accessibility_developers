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
                url: 'http://www.lingoes.net/en/translator/langcode.htm',
                label: 'List of codes',
            },
            {
                url: 'https://mosaico.gov.pt/homepage',
                label: 'Mosaico - Primary language',
            },
            {
                url: 'https://www.tedbaker.com/uk',
                label: 'Ted Baker - Primary language',
            },
            {
                url: 'https://www.coverflex.com/en-pt',
                label: 'Coverflex - Primary language',
            },
            {
                url: 'https://info.portaldasfinancas.gov.pt/pt/docs/Conteudos_1pagina/Pages/portuguese-tax-system.aspx',
                label: 'Finances - Language for parts of page',
            },
        ],
    },
    landmarks: {
        tips: [],
        live_examples: [
            {
                url: 'https://www.gov.uk/cost-of-living/60-or-over',
                label: 'Gov UK',
            },
            {
                url: 'https://eportugal.gov.pt/contactos',
                label: 'ePortugal',
            },
            {
                url: 'https://pt.tommy.com/terms-and-conditions',
                label: 'Tommy Hilfiger',
            },
            {
                url: 'https://mosaico.gov.pt/etapas',
                label: 'Mosaico',
            },
        ],
    },
    headings: {
        tips: [
            'Next heading <code>VO + Command + H</code>',
            'Previous heading <code>VO + Shift + Command + H</code>'
        ],
        live_examples: [
            {
                url: 'https://mosaico.gov.pt/homepage',
                label: 'Mosaico - Not meaningfully headings (1. 2.)',
            },
            {
                url: 'https://mosaico.gov.pt/perfis/ux-ui-designer',
                label: 'Mosaico - Missing headings (Stages, principles)',
            },
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

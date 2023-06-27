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
                url: 'https://mosaico.gov.pt/principios/10',
                label: 'Mosaico - Primary language and parts of page',
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
                url: 'https://www.ipma.pt/pt/otempo/prev.localidade.hora/legenda.jsp',
                label: 'IPMA - Language for parts of page',
            },
            {
                url: 'https://info.portaldasfinancas.gov.pt/pt/docs/Conteudos_1pagina/Pages/portuguese-tax-system.aspx',
                label: 'Finances - Primary and Language for parts of page',
            },
            {
                url: 'https://www.w3.org/',
                label: 'W3 - Choose language',
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
            'Previous heading <code>VO + Shift + Command + H</code>',
            'To use aria for heading <code>role: heading</code> and <code>aria-level: (heading level)</code>'
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
            {
                url: 'https://www.whitehouse.gov/priorities/',
                label: 'The White House',
            },
            {
                url: 'https://help.medium.com/hc/en-us/articles/360053078253',
                label: 'Medium',
            },
            {
                url: 'https://www.starbucksathome.com/pt/artigo/sobre-nos',
                label: 'Starbucks - Heading only visually',
            },
        ],
    },
    links: {
        tips: [
            'Link should point an element with an accessible name',
            'Add <code>tabindex: -1</code> to the content itself',
            'Use descriptive text links',
            "Add an accessible name for the image links"
        ],
        live_examples: [
            {
                url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                label: 'Transparência - Page contents',
            },
            {
                url: 'https://www.w3.org/WAI/standards-guidelines/#guidelines',
                label: 'W3 - Page contents',
            },
            {
                url: 'https://www.vinted.pt/',
                label: 'Vinted - Social media links',
            },
        ],
    },
    tables: {
        tips: [
            'Next table <code>VO + Command + T</code>',
        ],
        live_examples: [
            {
                url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                label: 'Transparência - Table',
            },
            {
                url: 'https://www.worten.pt/produtos/tabela-de-flexoes-astan-hogar-push-up-board-fitness-3060-multifuncao-mrkean-8436534304468',
                label: 'Worten - Wrong caption and missing proper headers',
            },
            {
                url: 'https://www.growthbook.io/pricing',
                label: 'Growthbook - Table with divs',
            },
            {
                url: 'https://getbootstrap.com/docs/5.3/content/tables/#table-borders',
                label: 'Bootstrap - No captions but well struture tables',
            },
            {
                url: 'https://zippyonline.com/pt/edredao-para-cama-120x60cm--essential-blue-zy-baby/80140797.html',
                label: 'Zippy - Delivery table',
            },
            {
                url: 'https://mosaico.gov.pt/termos-e-condicoes',
                label: 'Mosaico - Table without headers',
            }
        ],
    },
    lists: {
        tips: [
            'Next list <code>VO + Command + X</code>',
        ],
        live_examples: [
            {
                url: 'https://www.purina.co.uk/dog/dog-food',
                label: 'Purina - Pack size list (Change div to p)',
            },
            {
                url: 'https://www.purina.fr/chien/alimentation/croquettes',
                label: 'Purina - Offers list without telling the index',
            }
        ],
    },
    mark: {
        tips: [
            'Using CSS content property and pseudo-element <code>::before</code> and <code>::after</code>',
            'Check the accessibility tree'
        ],
        live_examples: [],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

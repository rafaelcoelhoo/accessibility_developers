export const notes = {
    pageTitle: {
        tips: [
            'List all opened tabs <code>VO + I</code>',
            'Navigate by tabs <code>VO + Right/Left Arrow</code>',
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.libertyseguros.pt/PublicWebsite/',
                        label: 'Liberty insurance',
                    },
                    {
                        url: 'https://www.estgv.ipv.pt/estgv/?',
                        label: 'ESTGV',
                    },
                    {
                        url: 'https://www.esev.ipv.pt/posgrad.aspx',
                        label: 'ESEV',
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://mosaico.gov.pt/homepage',
                        label: 'Mosaico',
                    },
                    {
                        url: 'https://www.gov.uk/search/all?order=relevance',
                        label: 'Gov UK - Search',
                    },
                    {
                        url: 'https://www.up.pt/portal/pt/estudar/licenciaturas-e-mestrados-integrados/oferta-formativa/',
                        label: 'Porto University',
                    },
                ],
            },
        ],
    },
    languages: {
        tips: [
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'http://www.lingoes.net/en/translator/langcode.htm',
                        label: 'List of codes',
                    },
                ],
            },
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://mosaico.gov.pt/principios/10',
                        label: 'Mosaico',
                        extraInformation: 'Primary language and parts of page - Section (Related areas in Mosaico)'
                    },
                    {
                        url: 'https://www.coverflex.com/en-pt',
                        label: 'Coverflex',
                        extraInformation: 'Primary language'
                    },
                    {
                        url: 'https://diariodarepublica.pt/dr/home',
                        label: 'Diário da Repúplica',
                        extraInformation: 'Primary language'
                    },
                    {
                        url: 'https://www.ipma.pt/pt/otempo/prev.localidade.hora/legenda.jsp',
                        label: 'IPMA',
                        extraInformation: 'Language for parts of page'
                    },
                    {
                        url: 'https://info.portaldasfinancas.gov.pt/pt/docs/Conteudos_1pagina/Pages/portuguese-tax-system.aspx',
                        label: 'Finances',
                        extraInformation: 'Language for parts of page'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.apple.com/choose-country-region/',
                        label: 'Apple',
                        extraInformation: 'Primary language'
                    },
                    {
                        url: 'https://www.w3.org/',
                        label: 'W3 - Choose language',
                    },
                ],
            },
        ],
    },
    landmarks: {
        tips: [
            'Use the rotor to check the landmarks',
            'Use Landmarks Bookmark plugin',
            'Add <code>header</code>',
            'Add <code>nav</code> with <code>aria-label="Menu principal"</code> - Header',
            'Add <code>nav</code> with <code>aria-label="Secondary menu"</code> - Footer',
            'Add <code>main</code>',
            'Add <code>article</code> with <code>aria-labelledby="article title"</code>',
            'Add <code>aside</code>',
            'Add <code>footer</code>',
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://microsoftedge.github.io/Demos/devtools-a11y-testing/',
                        label: 'Microsoft demo page',
                        extraInformation: 'Landmarks without accessible names'
                    },
                    {
                        url: 'https://eportugal.gov.pt/contactos',
                        label: 'ePortugal',
                        extraInformation: 'Two main landmark'
                    },
                    {
                        url: 'https://pt.tommy.com/terms-and-conditions',
                        label: 'Tommy Hilfiger',
                        extraInformation: 'Two navigation without accessible name'
                    },
                    {
                        url: 'https://mosaico.gov.pt/etapas',
                        label: 'Mosaico',
                        extraInformation: 'Two navigation without accessible name'
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/tema/#main',
                        label: 'Mais Transparência',
                        extraInformation: 'Two navigation without accessible name'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.gov.uk/cost-of-living/60-or-over',
                        label: 'Gov UK',
                    },
                    {
                        url: 'https://www.w3.org/standards/about/#value',
                        label: 'W3C',
                    },
                ],
            },
        ],
    },
    headings: {
        tips: [
            'Next heading <code>VO + Command + H</code>',
            'Previous heading <code>VO + Shift + Command + H</code>',
            'To use aria for heading <code>role: heading</code> and <code>aria-level: (heading level)</code>'
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://mosaico.gov.pt/homepage',
                        label: 'Mosaico - Homepage',
                        extraInformation: 'Not meaningfully headings (1. 2.)'
                    },
                    {
                        url: 'https://mosaico.gov.pt/perfis/ux-ui-designer',
                        label: 'Mosaico - Designer',
                        extraInformation: 'Missing headings (Stages, principles)'
                    },
                    {
                        url: 'https://help.medium.com/hc/en-us/articles/360053078253',
                        label: 'Medium',
                        extraInformation: 'Not hierarchical headings '
                    },
                    {
                        url: 'https://www.starbucksathome.com/pt/artigo/sobre-nos',
                        label: 'Starbucks',
                        extraInformation: 'Heading only visually'
                    },
                    {
                        url: 'https://www.ipv.pt/esav/candidaturas-esav/',
                        label: 'IPV',
                        extraInformation: 'Heading only visually and wrong headings tags for the main heading of the page'
                    },
                ],
            },{
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.magentaa11y.com/demos/dog-breeds/',
                        label: 'MagentaA11y'
                    },
                    {
                        url: 'https://www.whitehouse.gov/priorities/',
                        label: 'The White House',
                    },
                    {
                        url: 'https://usablenet.com/about-us',
                        label: 'UsableNet',
                    },
                    {
                        url: 'https://www.ikea.com/pt/pt/p/malm-comoda-c-6-gavetas-branco-60403584/?gclid=Cj0KCQiA14WdBhD8ARIsANao07ioMEBJ-1pkEmU5Of_YdoiWpSFqGITg3visx1LJltRd4GVBrsxolooaArNqEALw_wcB',
                        label: 'Ikea',
                        extraInformation: 'Section product details accordion, Heading using aria, with <code>role="heading"</code> and <code>aria-level="2"</code>'
                    },
                ],
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
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://my.vodafone.pt/main.html',
                        label: 'Vodafone',
                        extraInformation: 'Menu options not focusable, using <code>a</code> without <code>href</code> attribute'
                    },
                    {
                        url: 'https://www.cgd.pt/Particulares/Pages/Particulares_v2.aspx',
                        label: 'CGD',
                        extraInformation: 'Search without href'
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                        label: 'Transparência',
                        extraInformation: 'Page contents and destination link without <code>tabindex="-1"</code>'
                    },
                    {
                        url: 'https://web.dev/learn/html/links/',
                        label: 'Web Dev',
                        extraInformation: 'Page contents and destination link without <code>tabindex="-1"</code>'
                    },
                    {
                        url: 'https://www.vinted.pt/',
                        label: 'Vinted',
                        extraInformation: 'Social media links without name'
                    },
                ]
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.w3.org/WAI/standards-guidelines/#guidelines',
                        label: 'W3 - Page contents',
                    },
                    {
                        url: 'https://www.magentaa11y.com/design/',
                        label: 'MagentaA11y - Page contents',
                    },
                ]
            }
        ],
    },
    skipLinks: {
        tips: [],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://mosaico.gov.pt/etapas',
                        label: 'Mosaico',
                        extraInformation: 'Broken skip link'
                    },
                    {
                        url: 'https://www.ikea.com/pt/pt/p/ektorp-sofa-3-lugares-totebo-bege-claro-s49320043/',
                        label: 'Ikea',
                        extraInformation: 'Send to a group without an accessible name, show skip to main content and skip images'
                    },
                ]
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://abilitynet.org.uk/how-contact-us',
                        label: 'AbilityNet',
                    },
                ]
            }
        ],
    },
    tables: {
        tips: [
            'Next table <code>VO + Command + T</code>',
            'Tables without caption'
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.growthbook.io/pricing',
                        label: 'Growthbook',
                        extraInformation: 'Table with divs'
                    },
                    {
                        url: 'https://getbootstrap.com/docs/5.3/content/tables/#table-borders',
                        label: 'Bootstrap',
                        extraInformation: 'No captions but well structure tables'
                    },
                    {
                        url: 'https://zippyonline.com/pt/edredao-para-cama-120x60cm--essential-blue-zy-baby/80140797.html',
                        label: 'Zippy - Delivery section',
                        extraInformation: 'No captions but well structure tables'
                    },
                    {
                        url: 'https://www.ipv.pt/esav/estudar-esav/ofertaformatica-esav/enf-veterinaria/',
                        label: 'IPV',
                        extraInformation: 'Section Results CNA 2021, table without headings and no caption'
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/contratualizacao/',
                        label: 'Mais Transparência - Contractualization',
                        extraInformation: 'Missing row headings'
                    },
                ]
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://transparencia.gov.pt/pt/municipios/indicadores-por-municipio/dinamica-economica/',
                        label: 'Mais Transparência - Economic Dynamics'
                    },
                ]
            }
        ],

    },
    lists: {
        tips: [
            'Next list <code>VO + Command + X</code>',
            'On Safari with VoiceOver, list without bullets are not announced as lists'
        ],
        examples: [
        ],
    },
    mark: {
        tips: [
            'Using CSS content property and pseudo-element <code>::before</code> and <code>::after</code>',
            'Check the accessibility tree'
        ],
        examples: [
        ],
    },

    strong: {
        tips: [],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://www.tpgi.com/screen-readers-support-for-text-level-html-semantics/',
                        label: 'TPGI - Screen reader support for text level HTML semantics',
                    }
                ]
            }
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

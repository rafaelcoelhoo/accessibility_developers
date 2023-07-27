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
            {
                url: 'https://www.continente.pt/produto/batata-frita-lisa-original-lays-7379467.html',
                label: 'Continente - Aria and alt doing the same',
            },
            {
                url: 'https://mosaico.gov.pt/perfis/ux-ui-designer',
                label: 'Mosaico - Section stages, principles using empty alt and <code>aria-hidden="true"</code>',

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
            },
            {
                url: 'https://roble.store/blogs/blog/por-que-elegir-sillas-nordicstory',
                label: 'Roble store - Not meaningful alt',
            }
        ],
    },
    clickableImages: {
        tips: [
            'Have a look at the accessibility tree',
        ],
        live_examples: [
            {
                url: 'https://www.portovivosru.pt/',
                label: 'Porto - Search and menu (screen < 1100px)',
            },
            {
                url: 'https://www.walmart.com/plus?povid=wpl_pov_gm_TopNav',
                label: 'Walmart - Link homepage (label versus alt)'
            },
        ],
    },
    imagesOfText: {
        tips: [
            'Font scaling',
            'Page zooming',
        ],
        live_examples: [
            {
                url: 'https://www.b-simple.pt/en/',
                label: 'B-Simple'
            },
            {
                url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                label: 'Transparência'
            },
            {
                url: 'https://expresso.pt/',
                label: 'Expresso - Complaint book (footer)'
            },
            {
                url: 'https://www.peppasauce.love/',
                label: 'Peppa sauce - Footer image'
            },
        ],
    },
    svgSource: {
        tips: [
            'Font scaling',
            'Page zooming',
            'Have a look at the accessibility tree',
        ],
        live_examples: [
            {
                url: 'https://www.w3.org/',
                label: 'W3 - logo'
            },
        ],
    },
    svgInline: {
        tips: [
        ],
        live_examples: [
            {
                url: 'https://medium.com/',
                label: 'Medium - Notifications icon'
            },
            {
                url: 'https://www.w3.org/WAI/standards-guidelines/',
                label: 'W3 - Logo'
            },
            {
                url: '/https://my.vodafone.pt/main.html',
                label: 'Vodafone - Social media logos'
            },
            {
                url: 'https://www.zara.com/pt/',
                label: 'Zara - Logo'
            },
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

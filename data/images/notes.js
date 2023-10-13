export const notes = {
    decorativeImages: {
        tips: [
            'Navigate by images - <code>VO + Command + G</code>',
            'Have a look at the accessibility tree',
            "Compare the differences on how the images is announce in Chrome and Safari"
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://www.w3.org/WAI/tutorials/images/decision-tree/',
                        label: 'W3 - alt Decision Tree',
                    },
                ],
            },
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://mosaico.gov.pt/servicos-publicos-digitais',
                        label: 'Mosaico - Search modal',
                        extraInformation: 'Search modal (owl icon) using alt and <code>aria-hidden="true"</code>',
                        hide: true
                    },
                    {
                        url: 'https://www.continente.pt/produto/batata-frita-lisa-original-lays-7379467.html',
                        label: 'Continente',
                        extraInformation: '<code>title</code> and alt doing the same',
                        hide: true
                    },
                    {
                        url: 'https://mosaico.gov.pt/perfis/ux-designer',
                        label: 'Mosaico - Profile',
                        extraInformation: 'Section stages, principles using empty alt and <code>aria-hidden="true"</code>'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                        label: 'Mais Transparência',
                        extraInformation: 'Background image',
                        hide: true
                    },
                    {
                        url: 'https://mosaico.gov.pt/servicos-publicos-digitais',
                        label: 'Mosaico - Digital Services',
                        extraInformation: 'Background images',
                        hide: true
                    },
                ],
            },
        ],
    },
    informativeImages: {
        tips: [
            'Navigate by images - <code>VO + Command + G</code>',
            'Have a look at the accessibility tree',
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.libertyseguros.pt/PublicWebsite/',
                        label: 'Liberty insurance',
                        extraInformation: 'Informative image without alt attribute - Best place to be',
                        hide: true
                    },
                    {
                        url: 'https://www.worten.pt/dicas-como-escolher/como-escolher-fritadeira',
                        label: 'Worten',
                        extraInformation: 'Not meaningful alt'
                    },
                    {
                        url: 'https://www.starbucksathome.com/pt/artigo/sobre-nos',
                        label: 'Starbucks',
                        extraInformation: 'Not meaningful alt - Background image and COFFEHOUSES',
                        hide: true
                    },
                    {
                        url: 'https://roble.store/blogs/blog/por-que-elegir-sillas-nordicstory',
                        label: 'Roble store',
                        extraInformation: 'Not meaningful alt',
                        hide: true
                    },
                    {
                        url: 'https://www.santander.pt/abrir-conta-online',
                        label: 'Santander',
                        extraInformation: 'Not meaningful alt and duplicated',
                        hide: true
                    },
                    {
                        url: 'https://www.disneyworld.eu/vacation-planning/?ef_id=EAIaIQobChMIl6-YioXOgAMVLQCzAB2xgwUCEAAYASAAEgLOnPD_BwE:G:s&s_kwcid=AL!5060!3!601103288317!e!!g!!disney%20world&CMP=KNC-FY23_WDW_TRA_DXF_W365_SCP_SCP_Gold%7CG%7C5231213.RR.AM.01.01%7CMYBUBPO%7CBR%7C601103288317&keyword_id=aud-300113739056:kwd-12193621%7Cdc%7Cdisney%20world%7C601103288317%7Ce%7C5060:3%7C&gclid=EAIaIQobChMIl6-YioXOgAMVLQCzAB2xgwUCEAAYASAAEgLOnPD_BwE',
                        label: 'Disney World',
                        extraInformation: 'Using alt and aria-label',
                        hide: true
                    }
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.ikea.com/pt/pt/p/malm-comoda-c-6-gavetas-branco-60403584/?gclid=Cj0KCQiA14WdBhD8ARIsANao07ioMEBJ-1pkEmU5Of_YdoiWpSFqGITg3visx1LJltRd4GVBrsxolooaArNqEALw_wcB',
                        label: 'Ikea',
                        extraInformation: 'Rating Stars are using <code>role="img"</code> with <code>aria-label</code>'
                    },
                    {
                        url: 'https://www.americanexpress.com/us/credit-cards/',
                        label: 'American Express - Credit card',
                        extraInformation: 'Platinum card image',
                        hide: true
                    },
                    {
                        url: 'https://www.americanexpress.com/us/credit-cards/',
                        label: 'American Express - Rewards checking',
                        extraInformation: 'Good alt but bad implementation',
                        hide: true
                    },
                    {
                        url: 'https://blog.usablenet.com/a-record-breaking-year-for-ada-digital-accessibility-lawsuits',
                        label: 'UsableNet',
                        extraInformation: 'Image from article',
                        hide: true
                    }
                ],
            },
        ],
    },
    clickableImages: {
        tips: [
            'Keyboard navigation',
            'Have a look at the accessibility tree',
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.b-simple.pt/en/',
                        label: 'B-Simple',
                        extraInformation: 'B-Simple Patient Care image, alt is not part of the link'
                    },
                    {
                        url: 'https://www.portovivosru.pt/',
                        label: 'Porto SRU',
                        extraInformation: 'Search and menu icons (screen < 1100px)',
                        hide: true
                    },
                    {
                        url: 'https://www.aboutamazon.es/?language=pt',
                        label: 'Amazon',
                        extraInformation: 'Link images without name on footer',
                        hide: true
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.amazon.es/gp/yourstore?ie=UTF8&ref=ox_checkout_redirects_yourstore',
                        label: 'Amazon',
                        extraInformation: 'Link homepage'
                    },
                ],
            },
        ],
    },
    imagesOfText: {
        tips: [
            'Font scaling',
            'Page zooming',
            'Translate the page using Google Translate plugin',
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.b-simple.pt/en/',
                        label: 'B-Simple',
                        extraInformation: '"Who we thank section" - Images with not alt'
                    },
                    {
                        url: 'https://www.peppasauce.love/',
                        label: 'Peppa sauce',
                        extraInformation: 'Footer image (Mama Joyce Peppa Sauce)',
                        hide: true
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                        label: 'Mais Transparência',
                        extraInformation: 'Canvas section with a visually hidden text',
                        hide: true
                    },
                    {
                        url: 'https://expresso.pt/',
                        label: 'Expresso',
                        extraInformation: 'Complaint book (footer)',
                        hide: true
                    },
                    {
                        url: 'https://usablenet.com/strategic-relationships',
                        label: 'UsableNet',
                        extraInformation: 'Retail, Healthcare section',
                        hide: true
                    },
                ],
            },
        ],
    },
    complexImages: {
        tips: ['The support is still not good enough for <code>aria-details</code>'],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://a11ysupport.io/tech/aria/aria-details_attribute',
                        label: 'Aria support for assistive technologies'
                    },
                ],
            },
        ],
    },
    svgSource: {
        tips: [
            'Have a look at the accessibility tree',
        ],
        examples: [
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.w3.org/',
                        label: 'W3 - logo'
                    },
                ],
            },
        ],
    },
    svgInline: {
        tips: [
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://my.vodafone.pt/main.html',
                        label: 'Vodafone',
                        extraInformation: 'Social media logos without name and without <code>role="img"</code>'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://medium.com/',
                        label: 'Medium',
                        extraInformation: 'Notifications icon using <code>aria-label</code> but missing the <code>role</code>',
                        hide: true
                    },
                ],
            },
        ],
    },
}

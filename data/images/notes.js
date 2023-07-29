export const notes = {
    decorativeImages: {
        tips: [
            'Navigate by images - <code>VO + Command + G</code>',
            'Have a look at the accessibility tree',
            "Remove alt attribute and check the accessibility tree"
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
                        extraInformation: 'Search modal (owl icon) using alt and <code>aria-hidden="true"</code>'
                    },
                    {
                        url: 'https://www.continente.pt/produto/batata-frita-lisa-original-lays-7379467.html',
                        label: 'Continente',
                        extraInformation: '<code>role="presentation"</code> and alt doing the same'
                    },
                    {
                        url: 'https://mosaico.gov.pt/perfis/ux-ui-designer',
                        label: 'Mosaico',
                        extraInformation: 'Section stages, principles using empty alt and <code>aria-hidden="true"</code>'
                    },
                    {
                        url: 'https://www.americanexpress.com/en-us/banking/online-checking/?eep=90021&inav=us_menu_banking_personal_checking_personal_checking',
                        label: 'American Express',
                        extraInformation: 'Image from css but using alt'

                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                        label: 'Mais Transparência',
                        extraInformation: 'Background image'
                    },
                    {
                        url: 'https://mosaico.gov.pt/servicos-publicos-digitais',
                        label: 'Mosaico - Digital Services',
                        extraInformation: 'Background images'
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
                        url: 'https://www.worten.pt/dicas-como-escolher/como-escolher-fritadeira',
                        label: 'Worten',
                        extraInformation: 'Not meaningful alt'
                    },
                    {
                        url: 'https://www.starbucksathome.com/pt/artigo/sobre-nos',
                        label: 'Starbucks',
                        extraInformation: 'Not meaningful alt - Background image and COFFEHOUSES'
                    },
                    {
                        url: 'https://roble.store/blogs/blog/por-que-elegir-sillas-nordicstory',
                        label: 'Roble store',
                        extraInformation: 'Not meaningful alt'
                    },
                    {
                        url: 'https://www.santander.pt/abrir-conta-online',
                        label: 'Santander',
                        extraInformation: 'Not meaningful alt and duplicated'
                    }
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.americanexpress.com/us/credit-cards/',
                        label: 'American Express - Credit card',
                        extraInformation: 'Platinum card image'
                    },
                    {
                        url: 'https://www.americanexpress.com/us/credit-cards/',
                        label: 'American Express - Rewards checking',
                        extraInformation: 'Good alt but bad implementation'
                    }
                ],
            },
        ],
    },
    clickableImages: {
        tips: [
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
                        extraInformation: 'Search and menu icons (screen < 1100px)'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.walmart.com/plus?povid=wpl_pov_gm_TopNav',
                        label: 'Walmart',
                        extraInformation: 'Link homepage (label versus alt)'
                    },
                ],
            },
        ],
    },
    imagesOfText: {
        tips: [
            'Font scaling',
            'Page zooming',
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.b-simple.pt/en/',
                        label: 'B-Simple',
                        extraInformation: 'With who we integrate section - Images with not alt'
                    },
                    {
                        url: 'https://www.peppasauce.love/',
                        label: 'Peppa sauce',
                        extraInformation: 'Footer image (Mama Joyce Peppa Sauce)'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/sobre-o-plano/',
                        label: 'Mais Transparência',
                        extraInformation: 'Canvas section with a visually hidden text'
                    },
                    {
                        url: 'https://expresso.pt/',
                        label: 'Expresso',
                        extraInformation: 'Complaint book (footer)'
                    },
                    {
                        url: 'https://usablenet.com/strategic-relationships',
                        label: 'UsableNet',
                        extraInformation: 'Retail, Healthcare section'
                    },
                ],
            },
        ],
    },
    svgSource: {
        tips: [
            'Font scaling',
            'Page zooming',
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
                        extraInformation: 'Social media logos without name'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://medium.com/',
                        label: 'Medium',
                        extraInformation: 'Notifications icon using <code>aria-label</code> but missing the <code>role</code>'
                    },
                    {
                        url: 'https://www.zara.com/pt/',
                        label: 'Zara - Logo'
                    },
                ],
            },
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

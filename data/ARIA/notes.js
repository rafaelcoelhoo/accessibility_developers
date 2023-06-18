export const notes = {
    aria_tabs: {
        tips: [
            'Add <code>role="tablist"</code>',
            'Add accessible name to the <code>role="tablist"</code>',
            'Add <code>role="tab"</code> to each tab option',
            'Add <code>aria-selected</code> attribute to each tab',
            'Add <code>aria-controls</code> attribute to each tab',
            'Add focus management with arrow keys',
            'Add <code>role="tabpanel"</code>',
            'Add accessible name to the <code>role="tablist"</code>',
            'Add <code>aria-hidden="true"</code> to each hidden tab'
        ],
        live_examples: [
            {
                url: 'https://transparencia.gov.pt/pt/fundos-europeus/pt2020/barometro/',
                label: 'Transparencia'
            },
            {
                url: 'https://www.purina.co.uk/dog/dog-food',
                label: 'Purina'
            },
            {
                url: 'https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd',
                label: 'Google and axe devTools'
            },
        ],
    },
    buttons: {
        tips: ["Keyboard events", "Cursor pointer"],
        live_examples: [
            {
                url: 'https://www.w3.org/TR/css-ui-4/#propdef-cursor',
                label: 'W3 - Cursor documentation'
            },
            {
                url: 'https://www.olx.pt/imoveis/casas-moradias-para-arrendar-vender/moradias-venda/',
                label: 'OLX - Filter typology'
            },
            {
                url: 'https://www.continente.pt/mercearia/cafe-cha-e-chocolate-soluvel/?start=0&srule=FOOD_Mercearia&pmin=0.01',
                label: 'Continente - Add item button'
            },
            {
                url: 'https://makeitfable.com/',
                label: 'Fable - Menu options'
            },
        ],
    },
    links: {
        tips: [
            'Add <code>tabindex: 0</code>',
            'Add <code>role: link</code>',
        ],
        live_examples: [
            {
                url: 'https://mosaico.gov.pt/homepage',
                label: 'Mosaico - Search modal - Close button'
            },
        ],
    },
    checkboxes: {
        tips: ["Keyup versus Keydown"],
        live_examples: [
            {
                url: 'https://www.nestlehealthscience.ph/products/buynow ',
                label: 'Nestle'
            },
            {
                url: 'https://interfaceingame.com/games/?themes=medieval',
                label: 'Interface in game - Checkbox from CSS'
            },
        ],
    },
    modal: {
        tips: [
            'Add <code>role: dialog</code>',
            'Add <code>aria-modal: true</code>',
            'Add an accessible name',
            'Add <code>tabindex: -1</code> to the container',
            'Focus management',
        ],
        live_examples: [
            {
                url: 'https://www.record.pt/',
                label: 'Record - Login'
            },
            {
                url: 'https://usablenet.com/support',
                label: 'Usablenet - Accessibility status'
            },
            {
                url: 'https://www.ikea.com/pt/pt/p/malm-comoda-c-6-gavetas-branco-60403584/?gclid=Cj0KCQiA14WdBhD8ARIsANao07ioMEBJ-1pkEmU5Of_YdoiWpSFqGITg3visx1LJltRd4GVBrsxolooaArNqEALw_wcB',
                label: 'Ikea - Product details'
            },
        ],
    },
    aria_expanded: {
        tips: ["Add <code>aria-expanded</code> attribute"],
        live_examples: [
            {
                url: 'https://www.sns.gov.pt/home/perguntas-e-respostas/',
                label: 'SNS - Menu and Questions and Answers'
            },
            {
                url: 'https://www.purina.co.uk/dog/dog-food/dry',
                label: 'Purina - Terms and condition'
            },
            {
                url: 'https://blog.usablenet.com/page/2',
                label: 'UsableNet - Menu'
            },
            {
                url: 'https://www.apple.com/apple-arcade/',
                label: 'Apple'
            },
        ],
    },
    aria_live_examples: {
        tips: [],
        live_examples: [
            {
                url: 'https://www.continente.pt/mercearia/cafe-cha-e-chocolate-soluvel/?start=0&srule=FOOD_Mercearia&pmin=0.01',
                label: 'Continente - Add item'
            },
            {
                url: 'https://pt.tommy.com/tommy-hilfiger-x-vacation-flag-embroidery-t-shirt-mw0mw33438ybl',
                label: 'Tommy Hilfiger - Add item with and without size'
            },
            {
                url: 'https://www.pcdiga.com/casa-e-ar-livre/smart-home-e-iluminacao/camaras-de-seguranca/camara-de-seguranca-xiaomi-smart-camera-c300-2k-pan-tilt-security-wi-fi-bhr6540gl-6934177796296',
                label: 'PCDIGA - Add item'
            },
            {
                url: 'https://www.gov.uk/search/all?keywords=Taxes&level_one_taxon=d6c2de5d-ef90-45d1-82d4-5f2438369eea&order=relevance',
                label: 'Gov UK - Search'
            },
            {
                url: 'https://findajob.dwp.gov.uk/sign-in?after_login=search%3Floc%3D86383',
                label: 'Gov UK - Login'
            },
            {
                url: 'https://thepaciellogroup.github.io/WAI-ARIA-Usage/WAI-ARIA_usage.html',
                label: 'Aria - Bookmark'
            },
        ],
    },
    aria_live: {
        tips: [
            '<code>role: status</code> have an implicit <code>aria-live: polite</code>',
            '<code>role: alert</code> have an implicit <code>aria-live: assertive</code>',
        ],
        live_examples: [],
    },
    accessibleNames: {
        tips: [],
        live_examples: [
            {
                url: 'https://www.apple.com/apple-events/',
                label: 'Apple - Explore the preview'
            },
            {
                url: 'https://www.ikea.com/pt/pt/p/godmorgon-armario-p-lavatorio-c-2-gavetas-brilh-branco-30180995/',
                label: 'IKEA - Price'
            },
            {
                url: 'https://saboreiaavida.nestle.pt/produtos/kitkat-snack-de-chocolate',
                label: 'Nestle - Login and Social media links'
            },
            {
                url: 'https://feed.continente.pt/decoracao-e-jardim/como-decorar-o-escritorio-em-casa',
                label: 'Continente - Menu'
            },
            {
                url: 'https://my.vodafone.pt/main.html',
                label: 'Vodafone - Menu'
            },
            {
                url: 'https://transparencia.gov.pt/pt/fundos-europeus/pt2020/barometro/',
                label: 'Transparência - Modal'
            },
            {
                url: 'https://www.ikea.com/pt/pt/',
                label: 'IKEA - Create Account'
            },
            {
                url: 'https://www.worten.pt/cliente/conta#/myLogin',
                label: 'Worten - Login (Zoom required feedback)'
            },
        ],
    },
}

export function getDataByKey(key) {
    const data = {...notes[key]};
    //if (data.tips?.length) data.push({tips})
    return {...notes[key]};
}

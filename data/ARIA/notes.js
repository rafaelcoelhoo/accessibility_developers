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
                url: 'https://makeitfable.com/',
                label: 'Fable - Menu options'
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
}

export function getDataByKey(key) {
    const data = {...notes[key]};
    //if (data.tips?.length) data.push({tips})
    return {...notes[key]};
}

export const notes = {
    focus: {
        tips: [
            '<code>outline: 0</code>',
            '<code>:focus</code> versus <code>:focus-visible</code>',
        ],
        live_examples: [
            {
                url: 'https://expresso.pt/',
                label: 'Expresso'
            },
            {
                url: 'https://www.coverflex.com/pt',
                label: 'Coverflex'
            },
            {
                url: 'https://feed.continente.pt/',
                label: 'Continente'
            },
            {
                url: 'https://www.olx.pt/',
                label: 'Olx'
            },
            {
                url: 'https://getbootstrap.com/docs/5.0/components/buttons/',
                label: 'Bootstrap - Contrast'
            },
            {
                url: 'https://www.gov.uk/',
                label: 'Gov UK'
            },
            {
                url: 'https://makeitfable.com/',
                label: 'Fable'
            }
        ],
    },
    tabindex: {
        tips: [
            'log <code>document.activeElement</code>',
            '<code>.focus()</code> to <code>tabindex: 1</code>',
            '<code>.focus()</code> to normal paragraph',
            'Buttons and links already have an implicit <code>tabindex: 0</code>',
            'VER O TEMA DO FOCUS NÃO FICAR VISIVEL COM O FOCUS() - Penso que não dá mesmo aparentemente'
        ],
        live_examples: [],
    },
    tabindexExample: {
        tips: [],
        live_examples: [
            {
                url: 'https://eportugal.gov.pt/contactos',
                label: 'ePortugal - Form'
            },
            {
                url: 'https://www.gov.uk/',
                label: 'Gov UK - Report a problem'
            },
            {
                url: 'https://www.worten.pt/cliente/conta#/myLogin/',
                label: 'Worten - Show password login'
            },
        ],
    },
    keyboardAccessibility: {
        tips: ['Do not use <code>tabindex: 0</code>  everywhere, the screen readers can access to divs, paragraphs, span, etc.'],
        live_examples: [
            {
                url: 'https://my.vodafone.pt/main.html',
                label: 'Vodafone - links not focusable'
            },
            {
                url: 'https://www.chvng.pt/#main',
                label: 'Gaia Hospital - links not focusable'
            },
            {
                url: 'https://repsolmove.com/',
                label: 'Repsol - Login issues'
            },
            {
                url: 'https://feed.continente.pt/',
                label: 'Continente - Menu on hover'
            },
            {
                url: 'https://www.maxi-cosi.pt/customer/account/login/',
                label: 'Maxi-cosi - Show password'
            },
            {
                url: 'https://www.justdial.com/Mumbai/ods?city=Mumbai&area=&cid=jd_topbanner&jdtracker=jd_internal_desk-banner',
                label: 'Jd Xperts - Close button on location sidebar '
            },
            {
                url: 'https://getbootstrap.com/docs/4.6/getting-started/introduction/',
                label: 'Bootstrap - Focus visible'
            },
            {
                url: 'https://transparencia.gov.pt/pt/fundos-europeus/tema/ ',
                label: 'Transparência - Focus visible'
            },
            {
                url: 'https://blog.usablenet.com/page/2',
                label: 'UsableNet - Menu arrow option'
            },
        ],
    },
    tabOrder: {
        tips: ['Although it is possible to change the order of elements by CSS, you have to be very careful with this, because it will change the order in which screen readers provide information, because the order of the DOM is what will matter'],
        live_examples: [
            {
                url: 'https://www.w3schools.com/',
                label: 'W3Schools - Menu items order'
            },
        ],
    },
    focusOnModals: {
        tips: [
            'Send the keyboard focus from the triggering element to the dialog',
            'autofocus the first input only depending of the context',
            'Keep it within the custom dialog until the dialog is closed',
            'Send it back to the triggering element when the user closes the dialog',
            '<code>inert</code> versus <code>aria-modal: true</code> versus <code>aria-hidden: true</code>'
        ],
        live_examples: [
            {
                url: 'https://github.com/WICG/inert',
                label: 'inert Polyfill'
            },
            {
                url: 'https://www.tedbaker.com/uk',
                label: 'Ted Baker - Cookies'
            },
            {
                url: 'https://www.justdial.com/Mumbai/ods?city=Mumbai&area=&cid=jd_topbanner&jdtracker=jd_internal_desk-banner',
                label: 'Just Dial - Location modal'
            },
            {
                url: 'https://blog.outletbaby.com.br/',
                label: 'Outlet baby - Many tabs to reach the modal'
            },
        ],
    },
    keyboardTrap: {
        tips: [],
        live_examples: [
            {
                url: 'https://www.justdial.com/Mumbai/ods?city=Mumbai&area=&cid=jd_topbanner&jdtracker=jd_internal_desk-banner',
                label: 'Just Dial - keyboardTrap on location modal (incognito mode)'
            }
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

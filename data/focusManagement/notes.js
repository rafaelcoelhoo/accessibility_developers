export const notes = {
    focus: {
        tips: [
            'If we are using the mouse and lose track of which element is selected, at any time we can click on a key for the focus indicator to appear.',
            '<code>outline: 0</code>',
            'Comment/Uncomment css styles for <code>:focus</code> versus <code>:focus-visible</code>',
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
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
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
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
        ],
    },
    tabindex: {
        tips: [
            'log <code>document.activeElement</code>',
            '<code>.focus()</code> to <code>tabindex: 1</code>',
            '<code>.focus()</code> to normal paragraph',
            'Buttons and links already have an implicit <code>tabindex: 0</code>',
            //TODO
            'VER O TEMA DO FOCUS NÃO FICAR VISIVEL COM O FOCUS() - Penso que não dá mesmo aparentemente'
        ],
        examples: [],
    },
    tabindexExample: {
        tips: [],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://eportugal.gov.pt/contactos',
                        label: 'ePortugal',
                        extraInformation: 'Positive tabindex form'
                    },
                    {
                        url: 'https://www.worten.pt/cliente/conta#/myLogin/',
                        label: 'Worten',
                        extraInformation: 'Show password button with <code>tabindex=-1</code>'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.gov.uk/',
                        label: 'Gov UK',
                        extraInformation: '<code>tabindex=-1</code> on Is this page useful'
                    },
                ],
            },
        ],
    },
    keyboardAccessibility: {
        tips: ['Do not use <code>tabindex: 0</code>  everywhere, the screen readers can access to divs, paragraphs, span, etc.'],
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
                        url: 'https://www.tesla.com/pt_PT/inventory/new/m3?TRIM=PAWD&PAINT=BLACK&arrangeby=plh&zip=4000-000&range=50',
                        label: 'Tesla - Exterior color',
                        extraInformation: 'Checkbox with <code>display:none</code>, we can just remove it and see the active element'
                    },
                    {
                        url: 'https://repsolmove.com/',
                        label: 'Repsol - Login'
                    },
                    {
                        url: 'https://feed.continente.pt/',
                        label: 'Continente',
                        extraInformation: 'Menu on hover and menu options not focusable'
                    },
                    {
                        url: 'https://www.maxi-cosi.pt/customer/account/login/',
                        label: 'Maxi-cosi - Show password'
                    },
                    {
                        url: 'https://getbootstrap.com/docs/4.6/getting-started/introduction/',
                        label: 'Bootstrap',
                        extraInformation: 'Focus obscured behind menu'
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/tema/',
                        label: 'Transparência',
                        extraInformation: 'Focus obscured behind menu - Breadcrumb'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.apple.com/shop/accessories/all',
                        label: 'Apple',
                        extraInformation: 'Search accessories - Clear button'
                    },
                    {
                        url: 'https://blog.usablenet.com/page/2',
                        label: 'UsableNet',
                        extraInformation: 'Menu options with arrows'
                    },
                ],
            },
        ],
    },
    tabOrder: {
        tips: ['Although it is possible to change the order of elements by CSS, you have to be very careful with this, because it will change the order in which screen readers provide information, because the order of the DOM is what will matter'],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.w3schools.com/',
                        label: 'W3Schools - Menu items order'
                    },
                ],
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
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://github.com/WICG/inert',
                        label: 'inert Polyfill'
                    },
                ],
            },
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.worten.pt/cliente/conta#/myLogin',
                        label: 'Worten',
                        extraInformation: 'Modal login error - It is not receiving the focus'
                    },
                    {
                        url: 'https://my.vodafone.pt/main.html',
                        label: 'Vodafone',
                        extraInformation: 'Hamburger menu is not keeping the focus within the modal - screen less than 970px'
                    },
                    {
                        url: 'https://www.tedbaker.com/uk',
                        label: 'Ted Baker - Cookies',
                        extraInformation: 'Open in incognito mode to see the cookies modal, it is not keeping the focus within the modal'
                    },
                    {
                        url: 'https://www.justdial.com/Mumbai/ods?city=Mumbai&area=&cid=jd_topbanner&jdtracker=jd_internal_desk-banner',
                        label: 'Just Dial',
                        extraInformation: 'Open in incognito mode - Location modal (close button and focus managements)'
                    },
                    {
                        url: 'https://blog.outletbaby.com.br/',
                        label: 'Outlet baby',
                        extraInformation: 'Open in incognito mode, we need to tab till the end of the page to jump in the modal'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.bbc.com/',
                        label: 'BBC',
                        extraInformation: 'Open in incognito mode, Focus is moved to the cookies modal'
                    },
                    {
                        url: 'https://usablenet.com/',
                        label: 'Usablenet',
                        extraInformation: 'Accessibility Status modal - Focus management closing the modal'
                    },
                    {
                        url: 'https://pt-jobs.about.ikea.com/busca-de-vagas?acm=ALL&alrpm=2264397&ascf=[%7B%22key%22:%22ALL%22,%22value%22:%22%22%7D]',
                        label: 'Ikea',
                        extraInformation: 'Open in incognito mode, Cookies modal'
                    },
                ],
            },
        ],
    },
    keyboardTrap: {
        tips: [],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://www.justdial.com/Mumbai/ods?city=Mumbai&area=&cid=jd_topbanner&jdtracker=jd_internal_desk-banner',
                        label: 'Just Dial',
                        extraInformation: 'Open in incognito mode, Keyboard Trap on location modal'
                    }
                ],
            },
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

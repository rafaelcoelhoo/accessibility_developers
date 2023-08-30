export const notes = {
    focus: {
        tips: [
            'Impact of <code>outline: 0</code>',
            'Search for class <code>focus-outline</code>',
            'Comment/Uncomment css styles for <code>:focus</code> versus <code>:focus-visible</code>',
            'If we are using the mouse and lose track of which element is selected, at any time we can click on a key for the focus indicator to appear.',
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://github.com/WICG/focus-visible ',
                        label: 'Focus-visible polyfill'
                    },
                ]
            },
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://expresso.pt/',
                        label: 'Expresso'
                    },
                    {
                        url: 'https://www.coverflex.com/pt',
                        label: 'Coverflex',
                        extraInformation: '<code>:focus-visible</code> is being override by custom <code>focus</code> styles'
                    },
                    {
                        url: 'https://feed.continente.pt/',
                        label: 'Continente',
                        disabled: true
                    },
                    {
                        url: 'https://www.acessibilidade.gov.pt/',
                        label: 'Accessibility Gov',
                        extraInformation: 'See the report button without minimum contrast'
                    },
                    {
                        url: 'https://www.olx.pt/',
                        label: 'Olx',
                        extraInformation: 'Advertise and sell button',
                        disabled: true
                    },
                    {
                        url: 'https://getbootstrap.com/docs/5.0/components/buttons/',
                        label: 'Bootstrap - Contrast',
                        extraInformation: 'Check buttons contrast with the CCA app, contrast between focus and white background'
                    },
                    {
                        url: 'https://mosaico.gov.pt/pesquisar?query=acc',
                        label: 'Mosaico - Contrast',
                        extraInformation: 'Remove all filters button do not pass the minimum contrast, check with the CCA app <br> - Focus styles are coming from bootstrap, <code>btn</code> class',
                        disabled: true
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
            'See this log on Coverflex website',
            '<code>.focus()</code> to <code>tabindex: -1</code>',
            '<code>.focus()</code> to normal paragraph will not send the focus',
            'Buttons and links already have an implicit <code>tabindex: 0</code>',
        ],
        examples: [],
    },
    tabindexExample: {
        tips: [
            'Show advantage of <code>tabindex="-1"</code> on screen reader',
            'Remove the <code>tabindex="-1"</code> from file <code>tabIndexContentExample</code> file to see the impact',
            'Without <code>tabindex="-1"</code> the heading is not announced'
        ],
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
                        extraInformation: '<code>tabindex=-1</code> on Is this page useful <br> - Use the rotor to reach the button "Yes"'
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
                        url: 'https://www.aboutamazon.es/?language=pt',
                        label: 'Amazon',
                        extraInformation: 'Follow us option not focusable, just expand on hover'
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
                        extraInformation: 'Menu on hover and menu options not focusable - See <strong>Event Listener</strong> tab and open the mouseHover event'
                    },
                    {
                        url: 'https://mosaico.gov.pt/pesquisar?query=acc',
                        label: 'Mosaico',
                        extraInformation: 'Disable checkbox but not for keyboard users/screen reader users'
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
                    {
                        url: 'https://commission.europa.eu/index_en',
                        label: 'European Commission',
                        extraInformation: 'Open in incognito mode - Focus obscured behind cookies modal at the bottom'
                    },
                    {
                        url: 'https://flag.pt/',
                        label: 'Flag',
                        extraInformation: 'Focus obscured on Footer'
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
                        url: 'https://www.accessarmada.com/blog/',
                        label: 'Access Armada',
                        extraInformation: 'Menu options with arrows'
                    },
                ],
            },
        ],
    },
    tabOrder: {
        tips: [
            'The DOM is the source of true for tab order',
            'Although it is possible to change the order of elements by CSS, you have to be very careful with this, because it will change the order in which assistive technologies provide information, because the order of the DOM is what will matter',
            'Changing the order it is not predictable for users',
            'Check the tab order with the plugin Accessibility Insights for Web',
            'Check on firefox the tab order option',
            'Meaningful Sequence Level A'],
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
            '<code>inert</code> versus <code>aria-modal: true</code> versus <code>aria-hidden: true</code>',
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
                        extraInformation: 'Modal login error (Password must have minimum 4 characters) - It is not receiving the focus'
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
                        extraInformation: 'Open in incognito mode - Location modal (close button and focus management) <br> - Not all users use the mouse and can see the screen, the background content is accessible by keyboard users and screen reader users'
                    },
                    {
                        url: 'https://blog.outletbaby.com.br/',
                        label: 'Outlet baby',
                        extraInformation: 'Open in incognito mode, we need to tab till the end of the page to jump in to the modal'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://usablenet.com/',
                        label: 'Usablenet',
                        extraInformation: 'Accessibility Status modal - Focus management closing the modal'
                    },
                    {
                        url: 'https://pt-jobs.about.ikea.com/busca-de-vagas?acm=ALL&alrpm=2264397&ascf=[%7B%22key%22:%22ALL%22,%22value%22:%22%22%7D]',
                        label: 'Ikea',
                        extraInformation: 'Open in incognito mode, Cookies modal, Focus is moved to the cookies modal'
                    },
                ],
            },
        ],
    },
    keyboardTrap: {
        tips: ['ESC key cannot be the only way to close a modal'],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://my.vodafone.pt/main.html',
                        label: 'Vodafone',
                        extraInformation: 'Hamburger menu, it is not possible to close the modal with keyboard - screen less than 970px' +
                            '<br> - It is also not possible to click on any link as all of them are not keyboard accessible'
                    },
                    {
                        url: 'https://www.purina.co.uk/dog/dog-food/wet',
                        label: 'Purina',
                        extraInformation: 'It is not possible to close the modal by keyboard'
                    }
                ],
            },
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

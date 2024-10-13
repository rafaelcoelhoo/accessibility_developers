export const notes = {
    focus: {
        tips: [
            'Impact of <code>outline: 0</code>',
            'Search for class <code>focus-outline</code>',
            'Comment/Uncomment css styles for <code>:focus</code> versus <code>:focus-visible</code>',
            'If we are using the mouse and lose track of which element is selected, at any time we can click on a key for the focus indicator to appear.',
            'Log expression <code>document.activeElement</code>',
            'Show "What has focus" bookmark',
            'See this log on Público website, hover expression result',
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://github.com/WICG/focus-visible ',
                        label: 'Focus-visible polyfill'
                    },
                    {
                        url: 'https://codepen.io/svinkle/pen/WgYRxq',
                        label: 'What has focus'
                    },
                    {
                        url: 'https://www.sarasoueidan.com/blog/focus-indicators/',
                        label: 'Sara Soueidan - Non text contrast'
                    },
                    {
                        url: 'https://www.tpgi.com/when-i-get-that-low-contrast-feeling-i-need-non-textual-healing/#sectionHeading1',
                        label: 'TPGi - Non text contrast'
                    },
                ]
            },
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://expresso.pt/',
                        label: 'Expresso',
                        hide: true
                    },
                    {
                        url: 'https://www.coverflex.com/pt',
                        label: 'Coverflex',
                        extraInformation: '<code>:focus-visible</code> is being override by custom <code>focus</code> styles',
                        hide: true
                    },
                    {
                        url: 'https://www.publico.pt/antonio-costa',
                        label: 'Público',
                        extraInformation: '<code>:focus-visible</code> is being override by custom <code>focus</code> styles',
                    },
                    {
                        url: 'https://feed.continente.pt/',
                        label: 'Continente',
                        hide: true
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
                        hide: true
                    },
                    {
                        url: 'https://getbootstrap.com/docs/5.0/components/buttons/',
                        label: 'Bootstrap - Contrast',
                        extraInformation: 'Check buttons contrast with the CCA app, contrast between focus and white background'
                    },
                    {
                        url: 'https://mosaico.gov.pt/pesquisar?query=acc',
                        label: 'Mosaico - Contrast',
                        extraInformation: [
                            'Remove all filters button do not pass the minimum contrast, check with the CCA app',
                            'Focus styles are coming from bootstrap, <code>btn</code> class'
                        ],
                        hide: true
                    },
                    {
                        url: 'https://makeitfable.com/',
                        label: 'Fable',
                        extraInformation: 'Show high contrast mode'
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/pt2030/sobre-portugal-2030/',
                        label: 'Mais Transparência',
                        extraInformation: 'Focus obscured <code>scroll-padding-top</code> in the <code>html</code>'
                    },

                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.usa.gov/',
                        label: 'USA Gov',
                    },
                    {
                        url: 'https://www.gov.uk/',
                        label: 'Gov UK',
                        extraInformation: [
                            'Show high contrast mode',
                            "Transparent outline"
                        ],
                    },
                ],
            },
        ],
    },
    tabindex: {
        tips: [
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
                        extraInformation: 'Positive tabindex form',
                    },
                    {
                        url: 'https://www.worten.pt/cliente/conta#/myLogin/',
                        label: 'Worten',
                        extraInformation: 'Show password button with <code>tabindex=-1</code>'
                    },
                    {
                        url: 'https://www.myrefinishportal.com/us/en/',
                        label: 'Akzo',
                        extraInformation: 'Menu options with <code>tabindex=-1</code>'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.gov.uk/',
                        label: 'Gov UK',
                        extraInformation: [
                            '<code>tabindex=-1</code> on "Is this page useful"',
                            'Just use the keyboard navigation to see the importance of <code>tabindex=-1</code>',
                        ]
                    },{
                        url: 'https://transparencia.gov.pt/pt/',
                        label: 'Transparência Gov',
                        extraInformation: [
                            'Modal with <code>tabindex=-1</code>',
                        ]
                    },
                ],
            },
        ],
    },
    keyboardAccessibility: {
        tips: [],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.prozis.com/pt/pt',
                        label: 'Prozis',
                        extraInformation: ['Login - Divs working as buttons', 'Menus just with divs'],
                    },
                    {
                        url: 'https://www.aboutamazon.es/?language=pt',
                        label: 'Amazon',
                        extraInformation: 'Follow us option not focusable, just expand on hover',
                        hide: true
                    },
                    {
                        url: 'https://www.tesla.com/pt_PT/inventory/new/m3?TRIM=PAWD&PAINT=BLACK&arrangeby=plh&zip=4000-000&range=50',
                        label: 'Tesla - Exterior color',
                        extraInformation: 'Checkbox with <code>display:none</code>, we can just remove it and see the active element',
                        hide: true
                    },
                    {
                        url: 'https://repsolmove.com/',
                        label: 'Repsol - Login',
                        hide: true
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
                        url: 'https://my.advancecare.com/registo?language=pt-PT',
                        label: 'AdvanceCare',
                        extraInformation: 'Checkboxes with images and see accessibility tree'
                    },
                    {
                        url: 'https://www.maxi-cosi.pt/customer/account/login/',
                        label: 'Maxi-cosi - Show password',
                        hide: true
                    },
                    {
                        url: 'https://getbootstrap.com/docs/4.6/getting-started/introduction/',
                        label: 'Bootstrap',
                        extraInformation: 'Focus obscured behind menu',
                        hide: true
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/tema/',
                        label: 'Transparência',
                        extraInformation: 'Focus obscured behind menu - Breadcrumb',
                        hide: true
                    },
                    {
                        url: 'https://commission.europa.eu/index_en',
                        label: 'European Commission',
                        extraInformation: 'Open in incognito mode - Focus obscured behind cookies modal at the bottom',
                        hide: true
                    },
                    {
                        url: 'https://flag.pt/',
                        label: 'Flag',
                        extraInformation: 'Focus obscured on Footer',
                        hide: true
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.apple.com/shop/accessories/all',
                        label: 'Apple',
                        extraInformation: [
                            'Search accessories - Clear button',
                            'Menu options with arrows'
                        ]
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
            'Show Order Viewer - Accessibility tab',
            'Check on firefox the tab order option',
            'Meaningful Sequence Level A'
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.w3schools.com/',
                        label: 'W3Schools - Menu items order',
                        hide: true
                    },
                    {
                        url: 'https://www.dfs.co.uk/furniture/dining-tables-and-chairs',
                        label: 'DFS'
                    },
                    {
                        url: 'https://www.myrefinishportal.com/us/en/sikkens.html',
                        label: 'Akzo'
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
            '<code>inert</code> - remove an element from the tab order, and from the accessibility tree',
            '<code>aria-hidden: true</code> - remove an element from the accessibility tree but not from the tab order',
            '<code>aria-modal: true</code> - avoid assistive technology users from navigating out of the modal (e.g. using cursor, using heading navigation).',
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
                        extraInformation: 'Modal login error (Password must have minimum 4 characters) - It is not receiving the focus',
                        hide: true
                    },
                    {
                        url: 'https://my.vodafone.pt/main.html',
                        label: 'Vodafone',
                        extraInformation: 'Hamburger menu is not keeping the focus within the modal - screen less than 970px'
                    },
                    {
                        url: 'https://www.nike.com/pt/en/w/womens-gifts-performance-3b0ufz3k7dgz5e1x6',
                        label: 'Nike',
                        extraInformation: [
                            'Open in incognito mode to see the cookies modal, it is not keeping the <code>cursor</code> within the modal',
                            'Missing <code>aria-modal="true"</code>',
                            'Add <code>aria-modal="true"</code>'
                        ]
                    },
                    {
                        url: 'https://www.justdial.com/Mumbai/ods?city=Mumbai&area=&cid=jd_topbanner&jdtracker=jd_internal_desk-banner',
                        label: 'Just Dial',
                        extraInformation: [
                            'Open in incognito mode - Location modal (close button and focus management)',
                            'Not all users use the mouse and can see the screen, the background content is accessible by keyboard users and screen reader users'
                        ],
                        hide: true
                    },
                    {
                        url: 'https://blog.outletbaby.com.br/',
                        label: 'Outlet baby',
                        extraInformation: 'Open in incognito mode, we need to tab till the end of the page to jump in to the modal',
                    },
                    {
                        url: 'https://www.asus.com/pt/content/glidex/',
                        label: 'Asus',
                        extraInformation: 'Open in incognito mode, cookies modal it is not keeping the focus within the modal',
                        hide: true
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
                        url: 'https://technology.blog.gov.uk/',
                        label: 'Blog Gov UK',
                        extraInformation: 'Open in incognito mode, Cookies modal, Focus is moved to the cookies modal'
                    },
                    {
                        url: 'https://www.gov.uk/',
                        label: 'Gov UK',
                        extraInformation: 'Open in incognito mode, Cookies modal even if it is closed will not obscure the focus indicator'
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
                        extraInformation: [
                            'Hamburger menu, it is not possible to close the modal with keyboard - screen less than 970px',
                            'It is also not possible to click on any link as all of them are not keyboard accessible'
                        ],
                        hide: true
                    },
                    {
                        url: 'https://www.purina.co.uk/dog/dog-food/wet',
                        label: 'Purina',
                        extraInformation: 'It is not possible to close the modal by keyboard',
                        hide: true
                    }
                ],
            },
        ],
    },
}

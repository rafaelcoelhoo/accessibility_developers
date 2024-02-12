export const notes = {
    aria_tabs: {
        tips: [
            'Add <code>role="tablist"</code>',
            'Add accessible name to the <code>role="tablist"</code>, from the heading',
            'Add <code>role="tab"</code> to each tab option',
            'Add <code>aria-selected</code> attribute to each tab',
            'Add <code>aria-controls</code> attribute to each tab',
            'Add focus management with arrow keys',
            'Add <code>role="tabpanel"</code>',
            'Add <code>aria-hidden="true"</code> to each hidden tab'
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.worten.pt/cliente/conta#/create_account',
                        label: 'Worten',
                        extraInformation: 'Create account and login, screen smaller than 960px'
                    },
                    {
                        url: 'https://ind.millenniumbcp.pt/pt/negocios/solucoes/Pages/alertas.aspx',
                        label: 'BCP',
                    },
                    {
                        url: 'https://www.purina.co.uk/dog/dog-food',
                        label: 'Purina',
                        extraInformation: 'Open Lightbox'
                    },
                    {
                        url: 'https://www.jn.pt/654547582/comentario-jn-a-nova-fase-da-operacao-vortex/',
                        label: 'JN - Últimas GMG on footer',
                        extraInformation: 'Open Lightbox'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/general-principles.html',
                        label: 'W3 - Navigation'
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/pt2020/barometro/',
                        label: 'Transparencia Gov'
                    },
                    {
                        url: 'https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd',
                        label: 'axe DevTools on chrome web store'
                    },
                    {
                        url: 'https://www.ablebits.com/',
                        label: 'Ablebits',
                        extraInformation: 'Open in incognito mode - Cookies modal'
                    },
                ],
            },
        ],
    },
    buttons: {
        tips: [
            'Add <code>tabindex: 0</code>',
            'Add <code>role: button</code>',
            "Handle keyboard events",
            "Cursor pointer on buttons"
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://www.w3.org/TR/css-ui-4/#propdef-cursor',
                        label: 'W3 - Cursor documentation',
                        extraInformation: [
                            'The cursor is a pointer that indicates a link',
                            'Authors should use pointer on links and may use on other interactive elements'
                        ]
                    },
                ],
            },
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.acessibilidade.gov.pt/',
                        label: 'Accessibility Gov',
                        extraInformation: 'Buttons (1, 2) as spans with just a role'
                    },
                    {
                        url: 'https://www.tesla.com/pt_pt',
                        label: 'Tesla',
                        extraInformation: 'Menu option - Idiom (Screen smaller than 1200px)'
                    },
                    {
                        url: 'https://portocanal.sapo.pt/',
                        label: 'Porto channel',
                        extraInformation: 'Hamburger menu using div',
                        hide: true
                    },
                    {
                        url: 'https://www.olx.pt/imoveis/casas-moradias-para-arrendar-vender/moradias-venda/',
                        label: 'OLX',
                        extraInformation: 'Filter typology using just <code>role:"button"</code>',
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.google.com/search?q=tempo+porto&rlz=1C5GCEM_enPT1024PT1024&sxsrf=AB5stBjyDtddD1W7zAzuz0wd0-aghH4N8g%3A1690060926866&ei=fki8ZOikNJO7kdUPtcGWgAs&oq=tempo+&gs_lp=Egxnd3Mtd2l6LXNlcnAiBnRlbXBvICoCCAEyChAjGIoFGCcYnQIyBBAjGCcyBxAjGIoFGCcyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyDhAAGIoFGLEDGIMBGMkDMggQABiABBiSAzIIEAAYigUYkgMyCxAAGIAEGLEDGIMBSKUNUIcBWIcBcAF4AZABAJgBggKgAYICqgEDMi0xuAEByAEA-AEBwgIHECMYsAMYJ8ICChAAGEcY1gQYsAPCAhAQLhiKBRjIAxiwAxhD2AEB4gMEGAAgQYgGAZAGC7oGBAgBGAg&sclient=gws-wiz-serp',
                        label: 'Google - Dropdown filters',
                    },
                    {
                        url: 'https://feathericons.com/',
                        label: 'Feather Icons - Download icons'
                    },
                    {
                        url: 'https://makeitfable.com/',
                        label: 'Fable - Menu options',
                        hide: true
                    },
                    {
                        url: 'https://www.augmental.tech/faq',
                        label: 'MouthPad - FAQ',
                    },
                ],
            },
        ],
    },
    links: {
        tips: [
            'Add <code>tabindex: 0</code>',
            'Add <code>role: link</code>',
            'Handle keyboard events',
            'Link with aria does not allow to <strong>copy the link</strong> from the left mouse button menu',
            'Do not allow to open the link in a <strong>new tab</strong>',
            'Do not allow to see the link url at the left bottom of the screen'
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://mosaico.gov.pt/homepage',
                        label: 'Mosaico',
                        extraInformation: 'Search modal - Close button'
                    },
                ],
            }
        ],
    },
    switch: {
        tips: [
            'Add <code>role: switch</code>, <code>tabindex: 0</code>, <code>aria-labelledby</code>, <code>aria-checked: true/false</code>',
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.pcdiga.com/',
                        label: 'PcDiga - Switch'
                    },
                    {
                        url: 'https://www.google.com/',
                        label: 'Google',
                        extraInformation: 'Open new incognito tab to see the switch'
                    },
                    {
                        url: 'https://mosaico.gov.pt/pesquisar?query=acc',
                        label: 'Mosaico',
                        extraInformation: 'Switch with no accessible name'
                    },
                    {
                        url: 'https://www.santander.pt/credito-habitacao/simulador-credito-habitacao',
                        label: 'Santander',
                        extraInformation: 'Last step - Toggle without name'
                    },
                    {
                        url: 'https://www.microsoft.com/en-us/edge?form=MA13FJ',
                        label: 'Microsoft Edge',
                        extraInformation: 'Wrong role for hamburguer menu'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.linkedin.com/jobs/search/?currentJobId=3683258692&geoId=100364837&keywords=Frontend&location=Portugal&refresh=true',
                        label: 'Linkedin'
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/prr/pesquisar/beneficiario/',
                        label: 'Mais Transparência'
                    },
                    {
                        url: 'chrome-extension://pbjjkligggfmakdaogkfomddhfmpjeni/DetailsView/detailsView.html?tabId=1573015678',
                        label: 'Accessibility Insights for Web'
                    },
                    {
                        url: 'https://eportugal.gov.pt/contactos',
                        label: 'ePortugal',
                        extraInformation: 'Open in incognito mode to open the cookies modal'
                    },
                ]
            }
        ],
    },
    checkboxes: {
        tips: [
            "Add <code>role='checkbox'</code>",
            "Add <code>tabindex='0'</code>",
            'Handle keyboard events'
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.nestlehealthscience.ph/products/buynow ',
                        label: 'Nestle',
                        extraInformation: 'Open second product',
                        hide: true
                    },
                    {
                        url: 'https://interfaceingame.com/games/?themes=medieval',
                        label: 'Interface in game',
                        extraInformation: 'Checkbox from CSS'
                    },
                ],
            }
        ],
    },
    modal: {
        tips: [
            'Add <code>role: dialog</code>',
            'Add <code>aria-modal: true</code>',
            'The escape button cannot be the only way to close a modal, we do not have an escape button on the modal, and not all the users know that the escape allows us to close the modal',
            'Add an accessible name with <code>aria-labelledby</code>',
            'Add <code>tabindex: -1</code> to the container',
            'Focus management',
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.record.pt/',
                        label: 'Record',
                        extraInformation: 'Login - it is just a div'
                    },
                    {
                        url: 'https://campus.altice.pt/',
                        label: 'Campus UA',
                        extraInformation: 'Login - it is just a div'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://usablenet.com/support',
                        label: 'Usablenet - Accessibility status'
                    },
                    {
                        url: 'https://www.ikea.com/pt/pt/p/malm-comoda-c-6-gavetas-branco-60403584/?gclid=Cj0KCQiA14WdBhD8ARIsANao07ioMEBJ-1pkEmU5Of_YdoiWpSFqGITg3visx1LJltRd4GVBrsxolooaArNqEALw_wcB',
                        label: 'Ikea - Product details'
                    },
                ],
            }
        ],
    },
    aria_expanded: {
        tips: [
            "Add <code>aria-expanded</code> attribute",
            "Add logic to change the value accordingly",
            "See this Tips accordion implementation as well"
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.sns.gov.pt/home/perguntas-e-respostas/',
                        label: 'SNS',
                        extraInformation: 'Menu options and Questions and Answers section',
                        hide: true
                    },
                    {
                        url: 'https://www.cgd.pt/Precario/Pages/Precario.aspx',
                        label: 'CGD',
                        extraInformation: [
                            'Other clients accordion',
                        ]
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/tema/',
                        label: 'Mais Transparência',
                        extraInformation: 'Modal All Themes by default has all options collapsed',
                        hide: true
                    },

                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://blog.usablenet.com/page/2',
                        label: 'UsableNet - Menu',
                        hide: true
                    },
                    {
                        url: 'https://www.accessibilityassociation.org/s/',
                        label: 'International Association of Accessibility Professionals',
                    },
                    {
                        url: 'https://www.novobanco.pt/ajuda-contactos',
                        label: 'Novo Banco - Questions'
                    },
                    {
                        url: 'https://www.apple.com/apple-arcade/',
                        label: 'Apple - Questions',
                        hide: true
                    },
                ],
            },
        ],
    },
    aria_live_examples: {
        tips: [],
        examples: [

        ],
    },
    aria_live: {
        tips: [
            '<code>role: status</code> have an implicit <code>aria-live: polite</code>',
            '<code>role: alert</code> have an implicit <code>aria-live: assertive</code>',
            '<code>role: log</code> have an implicit <code>aria-live: polite</code>',
            '<code>aria-atomic="true"</code> present the entire changed region as a whole',
            '<code>aria-atomic="false"</code> present only the changed node or nodes',
            'Add <code>aria-atomic="true"</code> to <code>role="log"</code>'
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://material.angular.io/cdk/a11y/overview#liveannouncer',
                        label: 'Angular - Material CDK A11y',
                    },
                    {
                        url: 'https://jinjiang.dev/vue-a11y-utils/#live-utils',
                        label: 'Vue A11y Utils',
                    },
                    {
                        url: 'https://www.npmjs.com/package/react-a11y-announcer',
                        label: 'react-a11y-announcer',
                    },
                ],
            },
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.continente.pt/mercearia/cafe-cha-e-chocolate-soluvel/?start=0&srule=FOOD_Mercearia&pmin=0.01',
                        label: 'Continente - Add item',
                        hide: true
                    },
                    {
                        url: 'https://pt.tommy.com/tommy-hilfiger-x-vacation-flag-embroidery-t-shirt-mw0mw33438ybl',
                        label: 'Tommy Hilfiger',
                        extraInformation: 'Add item with and without selected size'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.pcdiga.com/casa-e-ar-livre/smart-home-e-iluminacao/camaras-de-seguranca/camara-de-seguranca-xiaomi-smart-camera-c300-2k-pan-tilt-security-wi-fi-bhr6540gl-6934177796296',
                        label: 'PCDIGA',
                        extraInformation: 'Add item working with aria live, but poor modal focus management'
                    },
                    {
                        url: 'https://www.gov.uk/search/all?keywords=Taxes&level_one_taxon=d6c2de5d-ef90-45d1-82d4-5f2438369eea&order=relevance',
                        label: 'Gov UK - Search',
                        extraInformation: 'Change filter topic'
                    },
                    {
                        url: 'https://findajob.dwp.gov.uk/sign-in?after_login=search%3Floc%3D86383',
                        label: 'Gov UK - Login',
                        extraInformation: 'Login - Incorrect data'
                    },
                ],
            },
        ],
    },
    accessibleNamesExercise: {
        tips: [
            'Add <code>id="label"</code> to the <code>&lt;input&gt;</code> element with a class of <code>&lt;input&gt;</code>',
            'Add <code>for="label"</code> to the <code>&lt;label&gt;</code> element with a class of <code>help-text</code>',
            'Add <code>id="help"</code> to the <code>&lt;span&gt;</code>  element with a class of <code>help-text</code>',
            'Add <code>id="error"</code> to the <code>&lt;span&gt;</code>  element with a class of <code>error-message</code>',
            'Add <code>aria-describedby="help error"</code> to the <code>input&gt;</code> element',
            'View the accessible name/description in the accessibility tree'
        ],
        examples: [],
    },
    accessibleNames: {
        tips: [
            'Turn on VoiceOver to see how these elements are announced',
            'Translate to Deutsch'
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://www.nngroup.com/articles/form-design-placeholders/',
                        label: 'Placeholder -  Nielsen Norman Group',
                    },
                ],
            },
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.accessibilityassociation.org/s/',
                        label: 'International Association of Accessibility Professionals',
                        extraInformation: 'Accessible name does not start with the same text we have visually (Learn more)',
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/pt2020/sobre-portugal-2020/',
                        label: 'Transparência - Sobre o Plano',
                        extraInformation: 'See table',
                        hide: true
                    },
                    {
                        url: 'https://www.blissapplications.com/',
                        label: 'Bliss',
                        extraInformation: 'Logo Bliss',
                    },
                    {
                        url: 'https://saboreiaavida.nestle.pt/produtos/kitkat-snack-de-chocolate',
                        label: 'Nestle',
                        extraInformation: 'Login button and Social media links',
                        hide: true
                    },
                    {
                        url: 'https://www.olx.pt/imoveis/casas-moradias-para-arrendar-vender/moradias-venda/',
                        label: 'OLX',
                        extraInformation: 'Filters using the same <code>aria-label</code> (Typology, bathroom, Energetic certificate)',
                    },
                    {
                        url: 'https://www.santander.pt/credito-habitacao/simulador-credito-habitacao',
                        label: 'Santander',
                        extraInformation: 'Acquisition checkbox without accessible names',
                    },
                    {
                        url: 'https://www.cgd.pt/Particulares/Pages/Particulares_v2.aspx',
                        label: 'CGD',
                        extraInformation: 'Close button on CaixaDirecta panel is just a "x" without an explicit label of the functionality',
                        hide: true
                    },
                    {
                        url: 'https://www.tesla.com/pt_PT/inventory/new/m3?TRIM=PAWD&PAINT=BLACK&arrangeby=plh&zip=4000-000&range=50',
                        label: 'Tesla',
                        extraInformation: 'Type of view buttons using empty <code>aria-label</code>',
                        hide: true
                    },
                    {
                        url: 'https://feed.continente.pt/decoracao-e-jardim/como-decorar-o-escritorio-em-casa',
                        label: 'Continente',
                        extraInformation: 'Menu button with no accessible name and button on left side with name from pseudo class <code>:before</code> incorrectly',
                        hide: true
                    },
                    {
                        url: 'https://www.worten.pt/cliente/conta#/myLogin',
                        label: 'Worten',
                        extraInformation: [
                            'Login using incorrect email format (ie: just a letter), will affect the zoom of the feedback and the time that is visible',
                            'Invalid email error message it is not associated to the input field'
                        ],
                    },
                    {
                        url: 'https://mosaico.gov.pt/servicos-publicos-digitais',
                        label: 'Mosaico',
                        extraInformation: 'Search (screen small than 1200px) (Add class visually-hidden)',
                    },
                    {
                        url: 'https://www.purina.co.uk/dog/dog-food/dry',
                        label: 'Purina - Lightbox',
                        extraInformation: 'Open lightbox and open the rotor to see the list of link (Buy Now)',
                        hide: true
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.apple.com/apple-events/',
                        label: 'Apple',
                        extraInformation: 'Explore the preview and learn more links',
                    },
                    {
                        url: 'https://www.accessarmada.com/services/',
                        label: 'Access Armada',
                        extraInformation: 'Learn more links with more context programmatically'
                    },
                    {
                        url: 'https://findajob.dwp.gov.uk/sign-in',
                        label: 'Gov UK',
                        extraInformation: 'Accessible names up to date with the error messages'
                    },
                    {
                        url: 'https://www.ikea.com/pt/pt/p/godmorgon-armario-p-lavatorio-c-2-gavetas-brilh-branco-30180995/',
                        label: 'IKEA',
                        extraInformation: 'Price using aria-hidden and visually hidden',
                        hide: true
                    },
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/pt2020/barometro/',
                        label: 'Transparência',
                        extraInformation: 'Technical file - Attention to voice control',
                        hide: true
                    },
                ],
            },
        ],
    },
}

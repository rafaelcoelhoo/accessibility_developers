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
                    {
                        url: 'https://www.financecareers.civilservice.gov.uk/how-to-join-us/',
                        label: 'Government Finance Function',
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
                        ],
                        hide: true
                    },
                    {
                        url: 'https://appt.org/en/articles/native-versus-cross-frameworks-accessible-apps#5-role',
                        label: 'Role - Mobile equivalent',
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
                        hide: true
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
                        extraInformation: ['Checkbox from CSS',
                            'Remove class <code>display: none</code> and add <code>opacity</code>',
                            'Add aria attributes to the label'
                        ]
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
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://appt.org/en/articles/native-versus-cross-frameworks-accessible-apps#7-state',
                        label: 'States -  Mobile Equivalent',
                    }
                ],
            },
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
                        ],
                        hide: true
                    },
                    {
                        url: 'https://expresso.pt/',
                        label: 'Expresso',
                        extraInformation: [
                            'Login',
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
                        hide: true
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
            '<code>aria-atomic="false"</code> present only the changed node or nodes (default)',
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
                    {
                        url: 'https://appt.org/en/articles/native-versus-cross-frameworks-accessible-apps#10-status-messages',
                        label: 'Live regions - Mobile equivalent',
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
                        extraInformation: 'Add item with and without selected size',
                        hide: true
                    },
                    {
                        url: 'https://www.lionofporches.com/pt/masculino/camisas/camisa_p223190.html?id=3239&cat=0&pc=1',
                        label: 'Lion of Porches',
                        extraInformation: 'Add item with and without selected size'
                    },
                    {
                        url: 'https://www.worten.pt/produtos/bundle-portatil-hp-14-ep0001np-desk2721e-sleev-14-intel-n200-ram-4gb-128-gb-ufs-7826159',
                        label: 'Worten',
                        extraInformation: 'Add item',
                        hide: true
                    },
                    {
                        url: 'https://www.timberland.pt/shop/pt/tbl-pt/t-shirt-wind-water-earth-and-sky-para-homem-em-branco-a27j8100',
                        label: 'Timberland',
                        extraInformation: 'Add item',
                        hide: true
                    },
                    {
                        url: 'https://www.optimumnutrition.com/en-us',
                        label: 'Optimum Nutrition',
                        extraInformation: 'Newsletter',
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.clarks.com/en-us/monahan-plain/26179978-p',
                        label: 'Clarks - Item',
                        extraInformation: 'Add an item without choosing a size'
                    },
                    {
                        url: 'https://www.clarks.com/en-us/cart',
                        label: 'Clarks - Cart',
                        extraInformation: ' Add one more product and remove on',
                        hide: true
                    },
                    {
                        url: 'https://www.pcdiga.com/casa-e-ar-livre/smart-home-e-iluminacao/camaras-de-seguranca/camaras-de-seguranca-tp-link-tapo-c420s2-2k-outdoor-ip65-security-wi-fi-hub-tapo-c420s2-4897098688052',
                        label: 'PCDIGA',
                        extraInformation: 'Add item working with aria live, but poor modal focus management'
                    },
                    {
                        url: 'https://www.gov.uk/search/all?keywords=Taxes&level_one_taxon=d6c2de5d-ef90-45d1-82d4-5f2438369eea&order=relevance',
                        label: 'Gov UK - Search',
                        extraInformation: ['Change filter topic', 'Using <code>aria-live="assertive"</code>'],
                        hide: true
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
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://www.nngroup.com/articles/form-design-placeholders/',
                        label: 'Placeholder -  Nielsen Norman Group',
                    },
                    {
                        url: 'https://appt.org/en/articles/native-versus-cross-frameworks-accessible-apps#4-name',
                        label: 'Names - Mobile equivalents',
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
                        hide: true
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
                        hide: true
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
                        url: 'https://autenticacao.fidelidade.pt/Autenticacao/Desktop.aspx?client_id=mje3KuvqF56sKY6&redirect_uri=https%3a%2f%2fwww.my.fidelidade.pt%2fcanw_auth%2fSSOEntryPage.aspx&response_type=code&state=0e20afe8-0c5b-44c2-80a0-63d13848fd00',
                        label: 'My Fidelidade',
                        extraInformation: [
                            'Invalid email error message it is not associated to the input field'
                        ],
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
                        url: 'https://www.walmart.com/account/login?vid=oaoh&tid=0&returnUrl=%2F',
                        label: 'Walmart',
                        extraInformation: 'Wrong email'
                    },
                    {
                        url: 'https://findajob.dwp.gov.uk/sign-in',
                        label: 'Gov UK',
                        extraInformation: 'Accessible names up to date with the error messages',
                        hide: true
                    },
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

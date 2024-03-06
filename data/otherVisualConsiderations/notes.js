export const notes = {
    reduceMotion: {
        tips: [
            'Turn on the reduce motion (operating system versus browser rendering)',
            'Check the reduce motion on CSS with the media query <code>prefers-reduced-motion</code>',
            'Check the reduce motion applied on javascript',
            'Show stylus plugin for bysix and Digital of things website'
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://github.com/infiniteluke/react-reduce-motion',
                        label: 'Github - React hook',
                        hide: true
                    },
                ],
            },
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.bysix.com/',
                        label: 'Bysix',
                        extraInformation: 'Buttons animations'
                    },
                    {
                        url: 'https://wearemultitudes.org/#content5',
                        label: 'Multitudes foundation',
                        extraInformation: 'Text scrolling',
                        hide: true
                    },
                    {
                        url: 'https://digitalofthings.studio/',
                        label: 'Digital of things',
                        extraInformation: 'Text scrolling'
                    },
                    {
                        url: 'https://www.42lisboa.com/',
                        label: '42 Lisbon',
                        extraInformation: 'Background video',
                        hide: true
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://viljamisdesign.com/',
                        label: 'Viljami S. Design ',
                        extraInformation: 'Background dots',
                        hide: true
                    },
                    {
                        url: 'https://www.apple.com/airpods-pro/',
                        label: 'Apple',
                    },
                    {
                        url: 'https://animalcrossing.nintendo.com/',
                        label: 'Nintendo - Toggle',
                        hide: true
                    },
                ],
            },
        ],
    },
    darkMode: {
        tips: [
            'Turn on the dark/light mode (operating system versus browser emulating)',
            '<code>media="(prefers-color-scheme: dark)"</code> attribute on <code>source</code> elements only respect device settings',
            'Show <code>updateSourceMedia</code> function to see how can we use the source element with custom theme switcher',
            'Show filter on images',
            '<code>currentColor</code> on SVG works for dark/light mode, either for system preference as manual options'
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://diariodarepublica.pt/dr/home',
                        label: 'Diário da República',
                        extraInformation: 'Missing dark mode response',
                        hide: true
                    },
                    {
                        url: 'https://www.acessibilidade.gov.pt/#',
                        label: 'Accessibility Gov',
                        extraInformation: 'Color contrast of "SimpleX" word on dark mode'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://developer.mozilla.org/pt-BR/',
                        label: 'MDN Web Docs',
                    },
                    {
                        url: 'https://www.whitehouse.gov/',
                        label: 'White House',
                        hide: true
                    },
                    {
                        url: 'https://web.dev/',
                        label: 'Webdev',
                        extraInformation: 'Toggle on footer',
                        hide: true
                    },
                    {
                        url: 'https://www.a11yproject.com/about/',
                        label: 'A11y Project',
                        extraInformation: 'Footer',
                        hide: true
                    },
                ],
            },
        ],
    },
    zoom: {
        tips: [
            'See viewport tags',
            'Do not use <code>user-scalable=no</code> nor <code>maximum-scale=1</code>'
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.cgd.pt/Particulares/Pages/Particulares_v2.aspx',
                        label: 'CGD',
                    },
                    {
                        url: 'https://app.seg-social.pt/sso/cookies?service=https%3A%2F%2Fapp.seg-social.pt%2Fptss%2Fcaslogin',
                        label: 'Segurança Social',
                    },
                    {
                        url: 'https://www.projectoperfeito.com/',
                        label: 'Projecto Perfeito',
                        hide: true
                    },
                    {
                        url: 'https://campus.altice.pt/',
                        label: 'Campus Altice',
                        hide: true
                    },
                    {
                        url: 'https://medium.com/about',
                        label: 'Medium',
                        hide: true
                    },
                ],
            },
        ],
    },
    zoomScaling: {
        tips: [
            'Browser zooming',
            'Font scaling',
            'Use Stylus localhost code, to change the line-height of class <code>fixed-card</code>',
            '<code>.fixed-card {\n' +
            '    line-height: 2;\n' +
            '}</code>'
        ],
        examples: [
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://transparencia.gov.pt/pt/',
                        label: 'Mais Transparência',
                        extraInformation: 'Just some content is scaling',
                        hide: true
                    },
                    {
                        url: 'https://www.cgd.pt/Particulares/Contas/Abertura-conta/Pages/Abertura-conta.aspx',
                        label: 'CGD',
                        extraInformation: 'Not scale at all'
                    },
                    {
                        url: 'https://www.novobanco.pt/particulares',
                        label: 'Novo Banco',
                        extraInformation: [
                            'Just some content is scaling and using fixed box height (section: Need help?)',
                            'Zoom Text only'
                        ]
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://mosaico.gov.pt/servicos-publicos-digitais',
                        label: 'Mosaico',
                        extraInformation: [
                            'Scaling properly',
                            'Zoom Text only'
                        ]
                    },
                    {
                        url: 'https://web.dev/about/',
                        label: 'Webdev',
                        extraInformation: 'Scaling properly',
                        hide: true
                    },
                ],
            },
        ],
    },
    targetSize: {
        tips: [
            'Importance of using padding and not margin for this behavior',
            'Check Visually hidden texts',
            'Use 24x24 cursor bookmark (2.5.8 Target Size (Minimum))',
            'Use 44x44 cursor bookmark (2.5.5 Target Size)',
            'Use target size bookmark (2.5.8 Target Size (Minimum))',
            'Check <code>aria-current</code>',
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://codepen.io/aardrian/pen/eYZWNyv',
                        label: '44 x 44 Cursor',
                    },
                    {
                        url: 'https://codepen.io/aardrian/pen/eYyjNVg',
                        label: '24 x 24 Cursor',
                    },
                ],
            },
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://www.santander.pt/cartao-debito',
                        label: 'Santander',
                        extraInformation: 'Footer - Social media',
                        hide: true
                    },
                    {
                        url: 'https://www.continente.pt/mercearia/cafe-cha-e-chocolate-soluvel/?start=0&srule=FOOD_Mercearia&pmin=0.01',
                        label: 'Continente',
                        extraInformation: 'Footer - Social media',
                        hide: true
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://www.linkedin.com/feed/',
                        label: 'Linkedin',
                        extraInformation: 'Profile button on screen smaller than 850px',
                        hide: true
                    },
                    {
                        url: 'https://www.w3.org/',
                        label: 'W3',
                        extraInformation: [
                            'Social media icon on Footer and Menu option on Search',
                            'Change padding to margin to see the impact'
                        ]
                    },
                    {
                        url: 'https://www.boia.org/blog',
                        label: 'Bureau of Internet Accessibility',
                        extraInformation: 'Pagination',
                        hide: true
                    },
                ],
            },
        ],
    },
}

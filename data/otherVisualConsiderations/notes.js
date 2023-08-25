export const notes = {
    reduceMotion: {
        tips: [
            'Turn on the reduce motion (operating system versus browser emulating)',
            'Show the reduce motion on CSS and on Javascript',
            'Show stylus plugin for bysix website'
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://github.com/infiniteluke/react-reduce-motion',
                        label: 'Github - React hook',
                        disabled: true
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
                        disabled: true
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
                        disabled: true
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
                        disabled: true
                    },
                    {
                        url: 'https://www.apple.com/airpods-pro/',
                        label: 'Apple',
                    },
                    {
                        url: 'https://animalcrossing.nintendo.com/',
                        label: 'Nintendo - Toggle',
                        disabled: true
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
                        disabled: true
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
                        disabled: true
                    },
                    {
                        url: 'https://web.dev/',
                        label: 'Webdev',
                        extraInformation: 'Toggle on footer',
                        disabled: true
                    },
                    {
                        url: 'https://www.a11yproject.com/about/',
                        label: 'A11y Project',
                        extraInformation: 'Footer',
                        disabled: true
                    },
                ],
            },
        ],
    },
    zoom: {
        tips: [
            'See viewport tags from app amd from examples'
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
                        disabled: true
                    },
                    {
                        url: 'https://campus.altice.pt/',
                        label: 'Campus Altice',
                        disabled: true
                    },
                    {
                        url: 'https://medium.com/about',
                        label: 'Medium',
                        disabled: true
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
                        disabled: true
                    },
                    {
                        url: 'https://www.cgd.pt/Particulares/Contas/Abertura-conta/Pages/Abertura-conta.aspx',
                        label: 'CGD',
                        extraInformation: 'Not scale at all'
                    },
                    {
                        url: 'https://www.novobanco.pt/particulares',
                        label: 'Novo Banco',
                        extraInformation: 'Just some content is scaling and using fixed box height (section: Need help?)'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://mosaico.gov.pt/servicos-publicos-digitais',
                        label: 'Mosaico',
                        extraInformation: 'Scaling properly'
                    },
                    {
                        url: 'https://web.dev/about/',
                        label: 'Webdev',
                        extraInformation: 'Scaling properly',
                        disabled: true
                    },
                ],
            },
        ],
    },
    targetSize: {
        tips: [
            'Importance of using padding and not margin for this success criteria',
            'Check Visually hidden texts',
            'Use 24x24 cursor plugin',
            'Use 44x44 cursor plugin',
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
                        disabled: true
                    },
                    {
                        url: 'https://www.continente.pt/mercearia/cafe-cha-e-chocolate-soluvel/?start=0&srule=FOOD_Mercearia&pmin=0.01',
                        label: 'Continente',
                        extraInformation: 'Footer - Social media',
                        disabled: true
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
                        disabled: true
                    },
                    {
                        url: 'https://www.w3.org/',
                        label: 'W3',
                        extraInformation: 'Social media icon on Footer and Menu option on Search <br> - Change padding to margin to se the impact'
                    },
                    {
                        url: 'https://www.boia.org/blog',
                        label: 'Bureau of Internet Accessibility',
                        extraInformation: 'Pagination',
                        disabled: true
                    },
                ],
            },
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

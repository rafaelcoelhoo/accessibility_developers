export const notes = {
    reduceMotion: {
        tips: [
            'Turn on the reduce motion (operating system versus browser emulating)',
            'Show the reduce motion on CSS and on Javascript',
            'Show stylus plugin for Digital of things'
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://github.com/infiniteluke/react-reduce-motion',
                        label: 'Github - React hook',
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
                        extraInformation: 'Text scrolling'
                    },
                    {
                        url: 'https://digitalofthings.studio/',
                        label: 'Digital of things',
                        extraInformation: 'Text scrolling'
                    },
                    {
                        url: 'https://www.42lisboa.com/',
                        label: '42 Lisbon',
                        extraInformation: 'Background video'
                    },
                ],
            },
            {
                sectionName: 'Accessible Examples',
                listOfUrls: [
                    {
                        url: 'https://viljamisdesign.com/',
                        label: 'Viljami S. Design ',
                        extraInformation: 'Background dots'
                    },
                    {
                        url: 'https://www.apple.com/airpods-pro/',
                        label: 'Apple',
                    },
                    {
                        url: 'https://animalcrossing.nintendo.com/',
                        label: 'Nintendo - Toggle',
                    },
                ],
            },
        ],
    },
    darkMode: {
        tips: [
            'Turn on the dark/light mode (operating system versus browser emulating)',
        ],
        live_examples: [
            {
                url: 'https://www.whitehouse.gov/',
                label: 'White House',
            },
            {
                url: 'https://web.dev/',
                label: 'Webdev',
            },
        ],
    },
    zoom: {
        tips: [
        ],
        live_examples: [
            {
                url: 'https://www.cgd.pt/Particulares/Pages/Particulares_v2.aspx',
                label: 'CGD',
            },
            {
                url: 'https://campus.altice.pt/',
                label: 'Campus Altice',
            },
        ],
    },
    zoomScaling: {
        tips: [
            'Browser zooming',
            'Font scaling',
            'Use Stylus to change the line-height of class <code>fixed-card</code>'
        ],
        live_examples: [
            {
                url: 'https://transparencia.gov.pt/pt/',
                label: 'Mais transparência - Just some content is scaling',
            },
            {
                url: 'https://www.cgd.pt/Particulares/Contas/Abertura-conta/Pages/Abertura-conta.aspx',
                label: 'CGD - Not scale at all',
            },
            {
                url: 'https://www.novobanco.pt/particulares',
                label: 'Novo Banco - Just some content is scaling and using fixed box height (Need help?)',
            },
            {
                url: 'https://web.dev/',
                label: 'Webdev - Scaling properly',
            },
        ],
    },
    targetSize: {
        tips: [
            'Use 44x44 cursor plugin'
        ],
        live_examples: [
            {
                url: 'https://codepen.io/aardrian/pen/eYZWNyv',
                label: '44 x 44 Cursor',
            },
            {
                url: 'https://www.linkedin.com/feed/',
                label: 'Linkedin - Profile button on small screen',
            },
            {
                url: 'https://www.w3.org/',
                label: 'W3 - Social media icon - Footer',
            },
            {
                url: 'https://www.w3.org/',
                label: 'W3 - Menu option - Search',
            },
            {
                url: 'https://www.santander.pt/cartao-debito',
                label: 'Santander - Footer - Social media',
            },
            {
                url: 'https://www.purina.co.uk/cat/cat-food/felix',
                label: 'Purina - Close modal',
            },
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

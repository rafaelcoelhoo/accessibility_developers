export const notes = {
    reduceMotion: {
        tips: [
            'Turn on the reduce motion',
            'Show the reduce motion on CSS and on Javascript',
            'Show stylus plugin for Digital of things'
        ],
        live_examples: [
            {
                url: 'https://github.com/infiniteluke/react-reduce-motion',
                label: 'Github - React hook',
            },
            {
                url: 'https://www.bysix.com/',
                label: 'Bysix - Buttons animations',
            },
            {
                url: 'https://wearemultitudes.org/#content5',
                label: 'We are multitudes - Text scrolling',
            },
            {
                url: 'https://digitalofthings.studio/',
                label: 'Digital of things - Text scrolling',
            },
            {
                url: 'https://www.peppasauce.love/',
                label: 'Peppa sauce',
            },
            {
                url: 'https://www.42lisboa.com/',
                label: '42 Lisbon - Background video',
            },
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

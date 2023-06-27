export const notes = {
    decorativeImages: {
        tips: [],
        live_examples: [
            {
                url: 'https://www.w3.org/WAI/tutorials/images/decision-tree/',
                label: 'W3 - alt Decision Tree',
            },
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

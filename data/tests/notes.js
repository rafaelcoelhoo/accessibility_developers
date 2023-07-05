export const notes = {
    duplicatedIds: {
        tips: [
            'Run axe devTools'
        ],
        live_examples: [
            {
                url: 'https://validator.w3.org/nu/',
                label: 'W3 validator - Page source'
            },
        ],
    }
}

export function getDataByKey (key) {
    return {...notes[key]};
}

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
    },
    accessLint: {
        tips: [],
        live_examples: [
            {
                url: 'http://localhost:3001/tests/duplicated-id',
                label: 'Duplicated ids'
            },
            {
                url: 'http://localhost:3001/aria/checkbox/initial',
                label: 'Checkboxes - Initial'
            },
        ],
    }
}

export function getDataByKey (key) {
    return {...notes[key]};
}

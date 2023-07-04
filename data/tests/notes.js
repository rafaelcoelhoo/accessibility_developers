export const notes = {
    duplicatedIds: {
        tips: ['ola'],
        live_examples: [
        ],
    }
}

export function getDataByKey (key) {
    return {...notes[key]};
}

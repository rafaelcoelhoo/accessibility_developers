export const notes = {
    aria_tabs: {
        tips: [
            'Add <code>role="tablist"</code>',
            'Add accessible name to the <code>role="tablist"</code>',
            'Add <code>role="tab"</code> to each tab option',
            'Add <code>aria-selected</code> attribute to each tab',
            'Add <code>aria-controls</code> attribute to each tab',
            'Add focus management with arrow keys',
            'Add <code>role="tabpanel"</code>',
            'Add accessible name to the <code>role="tablist"</code>',
            'Add <code>aria-hidden="true"</code> to each hidden tab'
        ],
        live_examples: [],
    },
}

export function getDataByKey (key) {
    const data = {...notes[key]};
    //if (data.tips?.length) data.push({tips})
    return {...notes[key]};
}

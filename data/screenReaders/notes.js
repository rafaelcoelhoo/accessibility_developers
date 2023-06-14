export const notes = {
    screenReaders: {
        tips: [
            'Enable keyboard navigation on your Mac',
            'Enable Safari keyboard accessibility',
            'Change voiceOver settings (speed, voice, verbosity)',
            'Start (or Stop) - <code>Command + F5</code>',
            'Navigate by Headings - VO + Command + H',
            'Navigate to the next Graphic - VO + Command + G',
            'Navigate to the next Table - VO + Command + T',
            'Navigate table cells - VO + Arrow Keys',
            'Navigate to the next Link - VO + Command + L',
            'Navigate to the next Form - VO + Command + J',
            'Navigate by focusable elements - Tab / Shift + Tab',
            'Navigate by other non-interactive elements - VO + Right Arrow - VO + Left Arrow',
            'Navigate by rotor - VO + U',
            'Read word by word - ADICIONAR COMANDO',
            'Stop reading - Control',
        ],
        live_examples: [
            {
                url: 'http://localhost:3001/accessibility-tree/good',
                label: 'Accessibility tree',
                isInternal: true
            },
            {
                url: 'https://transparencia.gov.pt/pt/fundos-europeus/tema/',
                label: 'Transparência Gov'
            },
            {
                url: 'https://www.acessibilidade.gov.pt/',
                label: 'Acessibilidade Gov'
            },
        ],
    },
}

export function getDataByKey (key) {
    const data = {...notes[key]};
    //if (data.tips?.length) data.push({tips})
    return {...notes[key]};
}

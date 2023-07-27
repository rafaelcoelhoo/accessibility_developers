export const notes = {
    screenReaders: {
        tips: [
            'Enable keyboard navigation on Mac preferences',
            'Enable Safari keyboard accessibility',
            'Change voiceOver settings (speed, voice, verbosity)',
            'Start (or Stop) - <code>Command + F5</code>',
            'Open voiceOver help - <code>VO + H</code>',
            'Start reading automatically - <code>VO + A</code>',
            'Navigate by Headings - <code>VO + Command + H</code>',
            'Navigate to the next Graphic - <code>VO + Command + G</code>',
            'Navigate to the next Table - <code>VO + Command + T</code>',
            'Navigate table cells - <code>VO + Arrow Keys</code>',
            'Navigate to the next Link - <code>VO + Command + L</code>',
            'Navigate to the next Form - <code>VO + Command + J</code>',
            'Navigate by focusable elements - <code>Tab / Shift + Tab</code>',
            'Navigate by other non-interactive elements - <code>VO + Right Arrow</code> - <code>VO + Left Arrow</code>',
            'Navigate by rotor - <code>VO + U</code>',
            'Read word by letters - <code>VO + Shift + Down Arrow</code> then <code>VO + Shift + Right Arrow</code>',
            'Stop reading - <code>Control</code>',
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://www.youtube.com/watch?v=kJKQmTumFP0&t=58s',
                        label: 'Dragon Naturally Speaking'
                    },
                    {
                        url: 'https://www.youtube.com/watch?v=A8H7iFCy5UI',
                        label: 'ZoomText'
                    },
                    {
                        url: 'https://www.youtube.com/watch?v=Gug23VRlsGg',
                        label: 'Refreshable Braille Display'
                    },
                    {
                        url: 'https://www.youtube.com/watch?v=ev8ERS5Z3NU',
                        label: 'Mobile Screen reader example'
                    },
                ],
            },
            {
                sectionName: 'Live Examples',
                listOfUrls: [
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
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

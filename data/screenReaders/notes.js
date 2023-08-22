export const notes = {
    screenReaders: {
        tips: [
            'Enable keyboard navigation on Mac preferences',
            'Enable Safari keyboard accessibility',
            'Start (or Stop) - <code>Command + F5</code>',
            'Change voiceOver settings (speed, voice, verbosity)',
            'Open VoiceOver training',
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
            'Pause reading - <code>Control</code>',
            'Check the difference between input type text and type password',
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://www.youtube.com/watch?v=kJKQmTumFP0&t=58s',
                        label: 'Dragon Naturally Speaking',
                        extraInformation: 'What is this, grid, number options, voice commands (56 seconds to 2,55 minutes)'
                    },
                    {
                        url: 'https://www.youtube.com/watch?v=A8H7iFCy5UI',
                        label: 'ZoomText'
                    },
                    {
                        url: 'https://www.augmental.tech/',
                        label: 'MouthPad'
                    },
                    {
                        url: 'https://www.youtube.com/watch?v=Gug23VRlsGg',
                        label: 'Refreshable Braille Display'
                    },
                    {
                        url: 'https://www.youtube.com/watch?v=Jao3s_CwdRU',
                        label: 'NVDA - Windows'
                    },
                    {
                        url: 'https://www.youtube.com/watch?v=0Zpzl4EKCco',
                        label: 'Talkback - Android'
                    },
                    {
                        url: 'https://www.youtube.com/watch?v=bCHpdjvxBws&t=336s',
                        label: 'VoiceOver - IOS'
                    },
                    {
                        url: 'https://www.youtube.com/watch?v=Q1gHxM1nP00&t=298s',
                        label: 'JAWS'
                    },
                    {
                        url: 'https://play.google.com/store/apps/details?id=app.screenreader&pcampaignid=web_share',
                        label: 'Talkback Screen Reader Gestures - App'
                    },
                    {
                        url: 'https://www.nvaccess.org/product/basic-training-for-nvda-ebook/',
                        label: 'NVDA Training'
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
                        url: 'https://www.acessibilidade.gov.pt/quem-somos//',
                        label: 'Acessibilidade Gov',
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

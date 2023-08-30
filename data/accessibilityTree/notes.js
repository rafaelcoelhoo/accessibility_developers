export const notes = {
    accessibilityTree: {
        tips: [
            'Analyse Accessibility Tree in Google Chrome Dev Tools',
            'Compare both accessibility trees',
            'See real time changes - Change text/Change input type',
            'See Accessibility Tree in Firefox Dev Tools - Inspect Accessibility Properties'
        ],
        examples: [
            {
                sectionName: 'Live example',
                listOfUrls: [
                    {
                        url: 'https://transparencia.gov.pt/pt/fundos-europeus/tema/',
                        label: 'Transparência Gov',
                        hide: true
                    }
                ],
            }
        ],
    },
}

export function getDataByKey(key) {
    const data = {...notes[key]};
    //if (data.tips?.length) data.push({tips})
    return {...notes[key]};
}

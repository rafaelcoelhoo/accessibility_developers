export const notes = {
    audit: {
        tips: [],
        examples: [
            {
                sectionName: 'Live Examples',
                listOfUrls: [
                    {
                        url: 'https://www.libertyseguros.pt/PublicWebsite/',
                        label: 'Liberty insurance'
                    }
                ],
            },
        ],
    }
}

export function getDataByKey (key) {
    return {...notes[key]};
}

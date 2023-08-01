export const notes = {
    audit: {
        tips: [
        ],
        examples: [
            {
                sectionName: 'Live Examples',
                listOfUrls: [
                    {
                        url: 'https://www.libertyseguros.pt/PublicWebsite/',
                        label: 'Liberty insurance',
                        extraInformation: 'Homepage <br> - Personal area type a invalid email to see just a color indication od something is wrong'
                    }
                ],
            },
        ],
    }
}

export function getDataByKey (key) {
    return {...notes[key]};
}

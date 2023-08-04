export const notes = {
    audit: {
        tips: [
            'Enable Stylus plugin for focus on Liberty Insurance'
        ],
        examples: [
            {
                sectionName: 'Live Examples',
                listOfUrls: [
                    {
                        url: 'https://www.libertyseguros.pt/PublicWebsite/',
                        label: 'Liberty insurance',
                        extraInformation: 'Homepage <br> - Personal area type a invalid email to see just a color indication od something is wrong'
                    },
                    {
                        url: 'https://wearemultitudes.org/#content5',
                        label: 'We are Multitudes',
                        extraInformation: 'Run ARC Toolkit before and after activating the overlay <br> Pause animations make lose some content'
                    }
                ],
            },
        ],
    }
}

export function getDataByKey (key) {
    return {...notes[key]};
}

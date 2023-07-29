export const notes = {
    duplicatedIds: {
        tips: [
            'Run axe devTools'
        ],
        examples: [
            {
                sectionName: 'Additional Resources',
                listOfUrls: [
                    {
                        url: 'https://validator.w3.org/nu/',
                        label: 'W3 validator',
                        extraInformation: 'Copy page source to run the validator'
                    },
                ],
            },
            {
                sectionName: 'Examples for Accessibility Enhancement',
                listOfUrls: [
                    {
                        url: 'https://mosaico.gov.pt/pesquisar?query=acc',
                        label: 'Mosaico',
                        extraInformation: 'Mobile and desktop use the same component and same ids, therefore the desktop filters do not have a label'
                    },
                ],
            },
        ],
    },
    accessLint: {
        tips: [],
        examples: [
            {
                sectionName: 'Page Examples',
                listOfUrls: [
                    {
                        url: 'http://localhost:3001/tests/duplicated-id',
                        label: 'Duplicated ids'
                    },
                    {
                        url: 'http://localhost:3001/aria/checkbox/initial',
                        label: 'Checkboxes - Initial',
                        extraInformation: 'Do not detect any issue and there are'
                    },
                ],
            },
        ],
    },
}

export function getDataByKey (key) {
    return {...notes[key]};
}

export const notes = {
    duplicatedIds: {
        tips: [
            'Run axe devTools',
            'Check accessible names',
            'Click on "account" label to see that the input that receives focus is from "Personal data"'
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
                        extraInformation: 'Mobile and desktop use the same component and same ids, therefore the desktop filters do not have a label',
                        hide: true
                    },
                ],
            },
        ],
    },
    keyboardNavigation: {
        tips: [],
        examples: [
            {
                sectionName: 'Page Examples',
                listOfUrls: [
                    {
                        url: 'http://localhost:3001/aria/links/initial',
                        label: 'Links - Initial',
                        extraInformation: [
                            'Run ARC Toolkit plugin',
                            'Do not detect any issue with the keyboard navigation'
                        ]
                    },
                ],
            },
        ],
    },
}

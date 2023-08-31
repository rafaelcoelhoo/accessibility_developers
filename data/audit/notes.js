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
                        url: 'https://feed.continente.pt/',
                        label: 'Continente',
                        extraInformation: 'Menu on hover and menu options not focusable - See <strong>Event Listener</strong> tab and open the mouseHover event'
                    },
                    {
                        url: 'https://wearemultitudes.org/#content5',
                        label: 'We are Multitudes',
                        extraInformation: 'Run ARC Toolkit before and after activating the overlay <br> Pause animations make lose some content',
                        hide: true
                    },
                    {
                        url: 'https://shop.hbo.com/',
                        label: 'HBO',
                        extraInformation: 'Run axe DevTools before and after activating the overlay <br> Activate Keyboard Navigation option',
                        hide: true
                    },
                    {
                        url: 'https://www.abbott.com/',
                        label: 'Abbott',
                        extraInformation: 'Run axe DevTools before and after activating the overlay <br> Activate Keyboard Navigation option',
                        hide: true
                    },
                    {
                        url: 'https://shop.hulu.com/',
                        label: 'Shop Hulu',
                        extraInformation: 'Run axe DevTools before and after activating the overlay <br> Activate Keyboard Navigation option',
                        hide: true
                    }
                ],
            },
        ],
    }
}

export function getDataByKey (key) {
    return {...notes[key]};
}

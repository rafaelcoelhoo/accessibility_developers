export const index = {
    title: 'Acessibilidade para developers',
    content: [
        {
            title: "Accessibility Tree",
            options: [{
                link: "/accessibility-tree/bad",
                label: "Accessibility Tree - Mau exemplo"
            },
                {
                    link: "/accessibility-tree/good",
                    label: "Accessibility Tree - Bom exemplo"
                }]
        },
        {
            title: "Técnicas para esconder/mostrar elemenos",
            options: [
                {
                    link: "/show-and-hide-elements/hide-from-all",
                    label: "Esconder de todos os utilizadores"
                },
                {
                    link: "/show-and-hide-elements/hide-visually",
                    label: "Esconder visualmente"
                },
                {
                    link: "/show-and-hide-elements/hide-from-at",
                    label: "Esconder das tecnologias de apoio"
                }]
        }, {
            title: "Focus Management",
            options: [
                {
                    link: "/focus-management/focus-indicator",
                    label: "Indicação visual do focus"
                },
                {
                    link: "/focus-management/tabindex",
                    label: "Tabindex"
                },
                {
                    link: "/focus-management/keyboard",
                    label: "Keyboard accessibility"
                },
                {
                    link: "/focus-management/tabindex-example",
                    label: "Exemplo Tabindex -1"
                },
                {
                    link: "/focus-management/content-order",
                    label: "Ordem de navegação"
                },
                {
                    link: "/focus-management/focus-on-modals",
                    label: "Gestão do focus em modais"
                },
                {
                    link: "/focus-management/keyboard-trap",
                    label: "Como involuntariamente podemos bloquear um utilizador de teclado"
                },
            ]
        },
        {
            title: "ARIA",
            options: [
                {
                    hasMultipleLinks: true,
                    label: "Accessible names",
                    id: "accessible_names",
                    options: [
                        {
                            label: "Accessible names",
                            topics: [
                                    {
                                        link: "/aria/accessible-names/initial",
                                        label: "Initial"
                                    },
                                    {
                                        link: "/aria/accessible-names/solution",
                                        label: "Solution"
                                    }
                                ]
                        },
                        {
                            label: "Real example",
                            topics: [
                                    {
                                        link: "/aria/practical-accessible-names/initial",
                                        label: "Initial"
                                    },
                                    {
                                        link: "/aria/practical-accessible-names/solution",
                                        label: "Solution"
                                    }
                                ]
                        },

                    ],
                },
                {
                    label: "Buttons",
                    hasMultipleLinks: true,
                    id: "aria_buttons",
                    options: [
                        {
                            label: "Buttons",
                            topics: [
                                {
                                    link: "/aria/buttons/initial",
                                    label: "Initial"
                                },
                                {
                                    link: "/aria/buttons/solution",
                                    label: "Solution"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Links",
                    hasMultipleLinks: true,
                    id: "aria_links",
                    options: [
                        {
                            label: "Links",
                            topics: [
                                {
                                    link: "/aria/links/initial",
                                    label: "Initial"
                                },
                                {
                                    link: "/aria/links/solution",
                                    label: "Solution"
                                }
                            ]
                        }
                        ]
                },
                {
                    link: "/aria/checkbox",
                    label: "Checkbox"
                },
                {
                    link: "/aria/tabs",
                    label: "Tabs"
                },
                {
                    label: "Switch control",
                    hasMultipleLinks: true,
                    id: "switch_control",
                    options: [
                        {
                            label: "Switch control",
                            topics: [
                                {
                                    link: "/aria/switch-control/initial",
                                    label: "Initial"
                                },
                                {
                                    link: "/aria/switch-control/solution",
                                    label: "Solution"
                                }
                            ]
                        }
                    ]
                },
                {
                    link: "/aria/modal",
                    label: "Modal"
                },
                {
                    link: "/aria/aria-live",
                    label: "aria-live"
                },
                {
                    link: "/aria/aria-expanded",
                    label: "aria-expanded"
                },
            ]
        }
    ]
};

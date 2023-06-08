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
                            link: "/aria/accessible-names/initial",
                            label: "Início"
                        },
                        {
                            link: "/aria/accessible-names/solution",
                            label: "Solução"
                        }
                    ],
                },
                {
                    link: "/aria/practical-accessible-names",
                    label: "Exemplo real"
                },
                {
                    link: "/aria/button",
                    label: "Botões"
                },
                {
                    link: "/aria/link",
                    label: "Links"
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
                            link: "/aria/switch-control/initial",
                            label: "Início"
                        },
                        {
                            link: "/aria/switch-control/solution",
                            label: "Solução"
                        }
                    ],
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

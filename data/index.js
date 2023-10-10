export const index = {
    title: 'Accessibility for developers',
    content: [
        {
            title: "Accessibility Tree",
            id: "accessibility_tree_root",
            options: [
                {
                    hasMultipleLinks: true,
                    id: "accessibility_tree",
                    label: "Accessibility Tree",
                    options: [
                        {
                            label: "Accessibility Tree",
                            topics: [
                                {
                                    link: "/accessibility-tree/bad",
                                    label: "Problem"
                                },
                                {
                                    link: "/accessibility-tree/good",
                                    label: "Solution"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: "Screen Readers",
            id: "screen_readers_root",
            options: [
                {
                    link: "/screen-readers",
                    label: "How to use"
                }
            ]
        },
        {
            title: "Show and hide techniques",
            id: "show_and_hide_root",
            options: [
                {
                    link: "/show-and-hide-elements/hide-from-all",
                    label: "Hide from all"
                },
                {
                    link: "/show-and-hide-elements/hide-visually",
                    label: "Hide from sight"
                },
                {
                    link: "/show-and-hide-elements/hide-from-at",
                    label: "Hide from assistive technologies"
                },
                {
                    link: "/show-and-hide-elements/examples",
                    label: "Live examples"
                }]
        }, {
            title: "Focus Management",
            id: "focus_management_root",
            options: [
                {
                    link: "/focus-management/focus-indicator",
                    label: "Focus indicator"
                },
                {
                    label: "Tabindex",
                    hasMultipleLinks: true,
                    id: "focus_management_tabindex",
                    options: [
                        {
                            label: "Tabindex",
                            topics: [
                                {
                                    link: "/focus-management/tabindex",
                                    label: "Tabindex attribute"
                                },
                                {
                                    link: "/focus-management/tabindex-example",
                                    label: "Tabindex -1 example"
                                }
                            ]
                        }
                    ]
                },
                {
                    link: "/focus-management/content-order",
                    label: "Tab order"
                },
                {
                    link: "/focus-management/focus-on-modals",
                    label: "Focus management in modals"
                },
                {
                    link: "/focus-management/keyboard-trap",
                    label: "Keyboard trap"
                },
                {
                    link: "/focus-management/keyboard",
                    label: "Keyboard accessibility Examples"
                },
            ]
        },
        {
            title: "ARIA",
            id: "aria_root",
            options: [
                {
                    hasMultipleLinks: true,
                    label: "Accessible names and descriptions",
                    id: "accessible_names",
                    options: [
                        {
                            label: "Accessible names and descriptions",
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
                    hasMultipleLinks: true,
                    id: "aria_expanded",
                    label: "Expanded and Collapsed",
                    options: [
                        {
                            label: "Expanded and Collapsed",
                            topics: [
                                {
                                    link: "/aria/aria-expanded/initial",
                                    label: "Initial"
                                },
                                {
                                    link: "/aria/aria-expanded/solution",
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
                    hasMultipleLinks: true,
                    id: "aria_checkbox",
                    label: "Checkbox",
                    options: [
                        {
                            label: "Checkbox",
                            topics: [
                                {
                                    link: "/aria/checkbox/initial",
                                    label: "Initial"
                                },
                                {
                                    link: "/aria/checkbox/solution",
                                    label: "Solution"
                                }
                            ]
                        }
                    ]
                },
                {
                    hasMultipleLinks: true,
                    id: "aria_tabs",
                    label: "Tabs",
                    hide: true,
                    options: [
                        {
                            label: "Tabs",
                            topics: [
                                {
                                    link: "/aria/tabs/initial",
                                    label: "Initial"
                                },
                                {
                                    link: "/aria/tabs/solution",
                                    label: "Solution"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Switch control",
                    hasMultipleLinks: true,
                    id: "switch_control",
                    hide: true,
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
                    hasMultipleLinks: true,
                    id: "aria_modal",
                    label: "Modal",
                    hide: true,
                    options: [
                        {
                            label: "Modal",
                            topics: [
                                {
                                    link: "/aria/modal/initial",
                                    label: "Initial"
                                },
                                {
                                    link: "/aria/modal/solution",
                                    label: "Solution"
                                }
                            ]
                        }
                    ]
                },
                {
                    hasMultipleLinks: true,
                    id: "aria_live",
                    label: "Live announcements",
                    options: [
                        {
                            label: "Live announcements",
                            topics: [
                                {
                                    link: "/aria/aria-live/initial",
                                    label: "Initial"
                                },
                                {
                                    link: "/aria/aria-live/solution",
                                    label: "Solution"
                                },
                                {
                                    link: "/aria/aria-live/examples",
                                    label: "Examples"
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            title: "Semantic Structure and Navigation",
            id: "semantic_structure_root",
            options: [
                {
                    link: "/semantic-structure-navigation/page-title",
                    label: "Page Title"
                },
                {
                    link: "/semantic-structure-navigation/languages",
                    label: "Language"
                },
                {
                    label: "Landmarks",
                    hasMultipleLinks: true,
                    id: "landmarks",
                    options: [
                        {
                            label: "Landmarks",
                            topics: [
                                {
                                    link: "/semantic-structure-navigation/landmarks/initial",
                                    label: "Initial"
                                },
                                {
                                    link: "/semantic-structure-navigation/landmarks/solution",
                                    label: "Solution"
                                }
                            ]
                        }
                    ]
                },
                {
                    link: "/semantic-structure-navigation/headings",
                    label: "Headings",
                    hasMultipleLinks: true,
                    id: "headings",
                    options: [
                        {
                            label: "Headings",
                            topics: [
                                {
                                    link: "/semantic-structure-navigation/headings/problem",
                                    label: "Problem"
                                },
                                {
                                    link: "/semantic-structure-navigation/headings/solution",
                                    label: "Solution"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Links",
                    hasMultipleLinks: true,
                    id: "links",
                    options: [
                        {
                            label: "Links",
                            topics: [
                                {
                                    link: "/semantic-structure-navigation/links/initial",
                                    label: "Initial"
                                },
                                {
                                    link: "/semantic-structure-navigation/links/solution",
                                    label: "Solution"
                                }
                            ]
                        },
                        {
                            label: "Skip links",
                            topics: [
                                {
                                    link: "/semantic-structure-navigation/links/skip-links",
                                    label: "Skip links"
                                }
                            ]
                        },
                    ]
                },
                {
                    label: "Tables",
                    hasMultipleLinks: true,
                    id: "tables",
                    options: [
                        {
                            label: "Tables",
                            topics: [
                                {
                                    link: "/semantic-structure-navigation/tables/problem",
                                    label: "Problem"
                                },
                                {
                                    link: "/semantic-structure-navigation/tables/solution",
                                    label: "Solution"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Lists",
                    hasMultipleLinks: true,
                    id: "lists",
                    hide: true,
                    options: [
                        {
                            label: "Lists",
                            topics: [
                                {
                                    link: "/semantic-structure-navigation/lists/problem",
                                    label: "Problem"
                                },
                                {
                                    link: "/semantic-structure-navigation/lists/solution",
                                    label: "Solution"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Other semantic elements",
                    hasMultipleLinks: true,
                    id: "otherSE",
                    hide: true,
                    options: [
                        {
                            label: "Other semantic elements",
                            topics: [
                                {
                                    link: "/semantic-structure-navigation/other-elements/mark",
                                    label: "Mark"
                                },
                                {
                                    link: "/semantic-structure-navigation/other-elements/strong",
                                    label: "Strong"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: "Images and SVG",
            id: "images_root",
            options: [
                {
                    label: "Images",
                    hasMultipleLinks: true,
                    id: "images",
                    options: [
                        {
                            label: "Images",
                            topics: [
                                {
                                    link: "/images/decorative",
                                    label: "Decorative images"
                                },
                                {
                                    link: "/images/informative",
                                    label: "Informative images"
                                },
                                {
                                    link: "/images/clickable",
                                    label: "Clickable images",
                                    hide: true,
                                },
                                {
                                    link: "/images/complex",
                                    label: "Complex images"
                                },
                                {
                                    link: "/images/text",
                                    label: "Images of Text"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "SVG",
                    hasMultipleLinks: true,
                    id: "svg",
                    options: [
                        {
                            label: "SVG",
                            topics: [
                                {
                                    link: "/SVG/inline",
                                    label: "Inline SVG"
                                },
                                {
                                    link: "/SVG/image-src",
                                    label: "SVG as image source"
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: "Other visual considerations",
            id: "other_visual_considerations_root",
            options: [
                {
                    link: "/visual-considerations/reduce-motion",
                    label: "Reduce motion"
                },
                {
                    link: "/visual-considerations/dark-mode",
                    label: "Dark mode"
                },
                {
                    label: "Zoom",
                    hasMultipleLinks: true,
                    id: "zoom",
                    options: [
                        {
                            label: "Zoom",
                            topics: [
                                {
                                    link: "/visual-considerations/zoom/mobile",
                                    label: "Zoom mobile"
                                },
                                {
                                    link: "/visual-considerations/zoom/scaling",
                                    label: "Browser zooming versus font scaling"
                                },
                            ]
                        }
                    ]
                },
                {
                    link: "/visual-considerations/target-size",
                    label: "Target size"
                },
            ]
        },
        {
            title: "Tests",
            id: "tests_root",
            options: [
                {
                    link: "/tests/duplicated-id",
                    label: "Duplicated ids"
                },
                {
                    link: "/tests/accesslint",
                    label: "AccessLint"
                },
                {
                    link: "/audit/websites",
                    label: "Audit"
                },
            ]
        }
    ]
};

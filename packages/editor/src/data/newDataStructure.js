const data = {
    root: [
        {
            id: "61620557-88bf-e100-f971-b19de5533eeb",
            type: "container",
            tag: "section",
            data: { style: { border: "1px solid red", padding: "10px 20px" } },
        },
    ],
    "61620557-88bf-e100-f971-b19de5533eeb": [
        {
            id: "1ad0de13-a26d-d3a2-4481-4cf3fcb74f2d",
            type: "tab",
            data: { tabs: { current: "Tab 3", easing: "ease", fadeIn: 300, fadeOut: 100, type: "wrapper" } },
        },
    ],
    "1ad0de13-a26d-d3a2-4481-4cf3fcb74f2d": [
        {
            id: "1ad0de13-a26d-d3a2-4481-4cf3fcb74f2e",
            type: "tabMenu",
            tag: "div",
            data: { tag: "div", tabs: { type: "menu" } },
        },
        {
            id: "1ad0de13-a26d-d3a2-4481-4cf3fcb74f38",
            type: "tabContent",
            tag: "div",
            data: { tag: "div", tabs: { type: "content" } },
        },
    ],
    "1ad0de13-a26d-d3a2-4481-4cf3fcb74f2e": [
        {
            id: "1ad0de13-a26d-d3a2-4481-4cf3fcb74f2f",
            type: "tabLink",
            tag: "a",
            data: { block: "inline", tabs: { type: "link" }, attr: { "data-w-tab": "Tab 1" } },
        },
        {
            id: "1ad0de13-a26d-d3a2-4481-4cf3fcb74f32",
            type: "tabLink",
            tag: "a",
            data: { block: "inline", tabs: { type: "link" }, attr: { "data-w-tab": "Tab 2" } },
        },
        {
            id: "1ad0de13-a26d-d3a2-4481-4cf3fcb74f35",
            type: "tabLink",
            tag: "a",
            data: { block: "inline", tabs: { type: "link" }, attr: { "data-w-tab": "Tab 3" } },
        },
    ],
    "1ad0de13-a26d-d3a2-4481-4cf3fcb74f2f": [
        { id: "1ad0de13-a26d-d3a2-4481-4cf3fcb74f30", type: "textBlock", tag: "div", data: { content: "Tab One" } },
    ],
    "1ad0de13-a26d-d3a2-4481-4cf3fcb74f32": [
        { id: "1ad0de13-a26d-d3a2-4481-4cf3fcb74f33", type: "textBlock", tag: "div", data: { content: "Tab Two" } },
    ],
    "1ad0de13-a26d-d3a2-4481-4cf3fcb74f35": [
        { id: "1ad0de13-a26d-d3a2-4481-4cf3fcb74f36", type: "textBlock", tag: "div", data: { content: "Tab Three" } },
    ],
    "1ad0de13-a26d-d3a2-4481-4cf3fcb74f38": [
        {
            id: "1ad0de13-a26d-d3a2-4481-4cf3fcb74f39",
            type: "tabPane",
            tag: "div",
            data: { tag: "div", tabs: { type: "pane" }, attr: { "data-w-tab": "Tab 1" } },
        },
        {
            id: "1ad0de13-a26d-d3a2-4481-4cf3fcb74f3a",
            type: "tabPane",
            tag: "div",
            data: { tag: "div", tabs: { type: "pane" }, attr: { "data-w-tab": "Tab 2" } },
        },
        {
            id: "1ad0de13-a26d-d3a2-4481-4cf3fcb74f3b",
            type: "tabPane",
            tag: "div",
            data: { tag: "div", tabs: { type: "pane" }, attr: { "data-w-tab": "Tab 3" } },
        },
    ],
    "1ad0de13-a26d-d3a2-4481-4cf3fcb74f39": [
        {
            id: "a2f94f44-bf35-f40d-1e74-fcf3a0b08b73",
            type: "img",
            tag: "img",
            data: {
                attr: {
                    src: "https://uploads-ssl.webflow.com/65aada369acfc62415bde1ba/65aada379acfc62415bde240_Blog%20Image.jpg",
                    loading: "lazy",
                    width: "auto",
                    height: "auto",
                    alt: "__wf_reserved_inherit",
                },
                img: { id: "65aada379acfc62415bde240" },
                srcsetDisabled: false,
                sizes: [
                    { max: 767, size: "100vw" },
                    { max: 991, size: "728px" },
                    { max: 10000, size: "940px" },
                ],
            },
        },
    ],
    "1ad0de13-a26d-d3a2-4481-4cf3fcb74f3a": [
        {
            id: "5bd74ac8-c9ec-7c2f-9247-f03a2f4f97ca",
            type: "text",
            data: {
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere",
            },
        },
    ],
    "1ad0de13-a26d-d3a2-4481-4cf3fcb74f3b": [
        { id: "ca577dbf-e2c8-6d1d-1a53-2bea8c0886d1", type: "title", tag: "h1", data: { content: "This is Last Tab" } },
    ],
};

export default data;

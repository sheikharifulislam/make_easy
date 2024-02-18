import { v4 as uuidv4 } from "uuid";

const elements = [
    {
        id: uuidv4(),
        name: "Container",
        type: "container",
        child: [
            {
                id: uuidv4(),
                name: "Container",
                type: "container",
                child: [
                    {
                        id: uuidv4(),
                        type: "button",
                        name: "Button",
                        content: "This is Button",
                        style: [],
                    },
                ],
            },
            {
                id: uuidv4(),
                name: "Container",
                type: "container",
                child: [
                    {
                        type: "img",
                        name: "image",
                        id: uuidv4(),
                        src: "https://cdn.pixabay.com/photo/2024/01/31/19/56/tulips-8544741_1280.jpg",
                    },
                ],
            },
        ],
    },
    {
        id: uuidv4(),
        name: "Container",
        type: "container",
        child: [
            {
                id: uuidv4(),
                type: "text",
                name: "text",
                content: "This is Text",
            },
        ],
    },
    {
        type: "container",
        name: "Container",
        id: uuidv4(),
        child: [
            {
                type: "img",
                name: "image",
                id: uuidv4(),
                src: "https://cdn.pixabay.com/photo/2024/01/31/19/56/tulips-8544741_1280.jpg",
            },
        ],
    },
];

export default elements;

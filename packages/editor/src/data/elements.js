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
];

export default elements;

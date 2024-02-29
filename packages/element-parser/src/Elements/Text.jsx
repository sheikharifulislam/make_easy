import React from "react";

const Text = ({ className, element, children }) => {
    const {
        data: { attr, content },
    } = element;
    return (
        <p className={className} {...attr}>
            {element.data.content}
        </p>
    );
};

export default Text;

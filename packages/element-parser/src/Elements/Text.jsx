import React from "react";

const Text = ({ className, element }) => {
    const {
        data: { attr, content },
    } = element;
    return (
        <p className={className} {...attr}>
            {content}
        </p>
    );
};

export default Text;

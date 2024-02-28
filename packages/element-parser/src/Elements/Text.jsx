import React from "react";

const Text = ({ className, element, children }) => {
    const {
        data: { attr, content },
    } = element;
    return (
        <p className={className} {...attr}>
            {children}
        </p>
    );
};

export default Text;

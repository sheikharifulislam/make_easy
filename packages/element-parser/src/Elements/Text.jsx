import React from "react";

const Text = ({ children, className, item }) => {
    const {
        data: { attr },
    } = item;
    return (
        <p className={className} {...attr}>
            {children}
        </p>
    );
};

export default Text;

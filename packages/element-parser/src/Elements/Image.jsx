import React from "react";

const Image = ({ element }) => {
    const {
        data: { attr },
    } = element;

    return <img src={attr.src} alt="" />;
};

export default Image;

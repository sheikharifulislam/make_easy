import React from "react";

const Image = ({ item }) => {
    const {
        data: { attr },
    } = item;

    return <img src={attr.src} alt="" />;
};

export default Image;

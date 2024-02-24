import React from "react";

const Container = ({ children, className, item }) => {
    console.log(item);
    return <div className={className}>{children}</div>;
};

export default Container;

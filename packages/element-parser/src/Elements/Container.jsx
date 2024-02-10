import React from "react";

const Container = ({ children }) => {
    console.log(children);

    return (
        <div
            style={{
                border: "1px solid red",
            }}
        >
            {children}
        </div>
    );
};

export default Container;

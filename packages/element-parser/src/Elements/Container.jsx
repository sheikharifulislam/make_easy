import React from "react";

const Container = ({ children }) => {
    console.log(children);

    return (
        <div
            style={{
                border: "1px solid red",
                margin: "10px",
            }}
        >
            {children}
        </div>
    );
};

export default Container;

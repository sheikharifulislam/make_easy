import React from "react";

const Container = ({ children }) => {
    return (
        <div
            style={{
                borde: "border 1px solid red",
            }}
        >
            {children}{" "}
        </div>
    );
};

export default Container;

import React from "react";

const Button = ({ element, children }) => {
    return <button>{element.data.content} </button>;
};

export default Button;

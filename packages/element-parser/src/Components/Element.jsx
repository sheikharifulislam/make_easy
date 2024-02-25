import React from "react";
import widgets from "../Elements/index";

const Element = ({ element, childElements, getChildElements }) => {
    console.log("from Element", element);
    const Widget = widgets[element.type];
    return <Widget element={element} childElements={childElements} getChildElements={getChildElements} />;
};

export default Element;

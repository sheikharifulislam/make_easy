import React from "react";
import widgets from "../Elements/index";

const Element = ({ element, childElements, getChildElements, WrapperComponent, ...rest }) => {
    const Widget = widgets[element.type];
    return (
        <>
            {WrapperComponent ? (
                <WrapperComponent>
                    <Widget
                        element={element}
                        childElements={childElements}
                        getChildElements={getChildElements}
                        {...rest}
                    />
                </WrapperComponent>
            ) : (
                <Widget element={element} childElements={childElements} getChildElements={getChildElements} {...rest} />
            )}
        </>
    );
};

export default Element;

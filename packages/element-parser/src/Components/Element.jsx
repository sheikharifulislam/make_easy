import React from "react";
import widgets from "../Elements/index";

const Element = ({ element, children, ...rest }) => {
    const Widget = widgets[element.type];
    return (
        <>
            {/* {WrapperComponent ? (
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
            )} */}
            <Widget element={element} {...rest}>
                {children}
            </Widget>
        </>
    );
};

export default Element;

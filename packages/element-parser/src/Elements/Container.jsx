import React from "react";

const Container = ({ element, getChildElements, childElements, children, renderChild }) => {
    return (
        <div
            style={{
                border: "1px solid red",
            }}
        >
            {/* {childElements.map((item) => (
                <RenderElements
                    key={item.id}
                    getChildElements={getChildElements}
                    elements={getChildElements(item.id)}
                />
            ))} */}

            {/* <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} /> */}
            {/* {children} */}
            {renderChild()}
        </div>
    );
};

export default Container;

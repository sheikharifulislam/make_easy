import React from "react";
import RenderElements from "../Components/RenderElement";

const Container = ({ element, getChildElements, childElements }) => {
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

            <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} />
        </div>
    );
};

export default Container;

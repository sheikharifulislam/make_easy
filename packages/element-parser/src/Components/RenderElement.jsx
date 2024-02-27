import Element from "./Element";

const RenderElements = ({ getChildElements, elements }) => {
    return (
        <>
            {elements.map((element, index) => (
                <Element
                    element={element}
                    key={element.id}
                    getChildElements={getChildElements}
                    childElements={getChildElements(element.id)}
                    index={index}
                />
            ))}
        </>
    );
};

export default RenderElements;

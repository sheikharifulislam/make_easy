import Element from "./Element";

const RenderElements = ({ getChildElements, elements }) => {
    return (
        <>
            {elements.map((element) => (
                <Element
                    element={element}
                    key={element.id}
                    getChildElements={getChildElements}
                    childElements={getChildElements(element.id)}
                />
            ))}
        </>
    );
};

export default RenderElements;

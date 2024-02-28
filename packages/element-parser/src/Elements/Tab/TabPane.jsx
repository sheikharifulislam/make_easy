const TabPane = ({ getChildElements, element, children }) => {
    return (
        <div>
            {/* <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} /> */}
            {children}
        </div>
    );
};

export default TabPane;

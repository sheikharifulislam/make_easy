const TabPane = ({ getChildElements, element, children, renderChild }) => {
    return (
        <div>
            {/* <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} /> */}
            {/* {children} */}
            {renderChild()}
        </div>
    );
};

export default TabPane;

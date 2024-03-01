const TabPane = ({ getChildElements, element, children, renderChild, activeTab }) => {
    console.log("from tabPane", activeTab);

    return (
        <div className="this is tab pane">
            {/* <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} /> */}
            {/* {children} */}
            {/* {renderChild({}, (_, index) => activeTab === index)} */}
            {renderChild({})}
        </div>
    );
};

export default TabPane;

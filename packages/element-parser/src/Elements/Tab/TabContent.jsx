const TabContent = ({ children, activeTab, renderChild }) => {
    // console.log("current active tab", activeTab);
    return (
        <div>
            {/* {childElements.map((item, index) => (
                <>
                    {currentActiveTab === index && (
                        <TabPane key={item.id} element={item} getChildElements={getChildElements} />
                    )}
                </>
            ))} */}

            {/* <RenderElements
                getChildElements={getChildElements}
                elements={getChildElements(element.id)}
                activeTab={activeTab}
                isRenderElement={({ index }) => {
                    console.log("from isRenderElement", index);
                    if (activeTab === index) return true;
                }}
            /> */}
            {/* {children} */}
            {renderChild({}, (data) => activeTab === data.id)}
        </div>
    );
};

export default TabContent;

import TabPane from "./TabPane";

const TabContent = ({ element, getChildElements, currentActiveTab }) => {
    const childElements = getChildElements(element.id);
    console.log("from TabContent", childElements);
    return (
        <div>
            {childElements.map((item, index) => (
                <>
                    {currentActiveTab === index && (
                        <TabPane key={item.id} element={item} getChildElements={getChildElements} />
                    )}
                </>
            ))}
        </div>
    );
};

export default TabContent;

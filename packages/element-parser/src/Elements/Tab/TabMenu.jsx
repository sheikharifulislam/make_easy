import TabLink from "./TabLink";

const TabMenu = ({ element, getChildElements, setActiveTab }) => {
    return (
        <div>
            {/* <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} /> */}
            {getChildElements(element.id).map((item, index) => (
                <TabLink
                    key={item.id}
                    element={item}
                    getChildElements={getChildElements}
                    setActiveTab={setActiveTab}
                    index={index}
                />
            ))}
        </div>
    );
};

export default TabMenu;

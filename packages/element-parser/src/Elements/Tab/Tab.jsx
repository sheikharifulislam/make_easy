import { useState } from "react";

const Tab = ({ element, children, passProps, renderChild }) => {
    const { settings } = element;
    const [activeTab, setActiveTab] = useState(settings.default.activeTab);

    const props = {
        tabMenu: { setActiveTab },
        tabContent: { activeTab },
    };

    // useMemo(() => passProps(props), []);

    return (
        <>
            {/* <TabMenu getChildElements={getChildElements} element={childElements[0]} setActiveTab={setActiveTab} />
            <TabContent getChildElements={getChildElements} element={childElements[1]} currentActiveTab={activeTab} /> */}

            {/* <RenderElements
                getChildElements={getChildElements}
                elements={getChildElements(element.id)}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            /> */}
            {/* <div>{children}</div> */}
            <div>{renderChild(props)}</div>
        </>
    );
};

export default Tab;

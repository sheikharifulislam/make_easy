import { useState } from "react";

const Tab = ({ element, children, passProps }) => {
    const [activeTab, setActiveTab] = useState(0);

    console.log(element);

    const props = {
        tabMenu: { setActiveTab },
        tabContent: { activeTab },
    };

    passProps(props[element.type]);

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
            <div>{children}</div>
        </>
    );
};

export default Tab;

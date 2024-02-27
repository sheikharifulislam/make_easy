import { useState } from "react";
import TabContent from "./TabContent";
import TabMenu from "./TabMenu";

const Tab = ({ element, getChildElements, childElements }) => {
    const [activeTab, setActiveTab] = useState(0);
    // // console.log("from main tab", childElements, getChildElements(element.id));
    // // console.log("from tab", element, getChildElements(element.id));
    // return <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} />;

    return (
        <>
            <TabMenu getChildElements={getChildElements} element={childElements[0]} setActiveTab={setActiveTab} />
            <TabContent getChildElements={getChildElements} element={childElements[1]} currentActiveTab={activeTab} />
        </>
    );
};

export default Tab;

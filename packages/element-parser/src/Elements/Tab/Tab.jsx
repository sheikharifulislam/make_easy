import RenderElements from "../../Components/RenderElement";

const Tab = ({ element, getChildElements, childElements }) => {
    console.log("from tab", element, getChildElements(element.id));
    return <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} />;
};

export default Tab;

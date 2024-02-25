import RenderElements from "../../Components/RenderElement";

const TabContent = ({ element, getChildElements }) => {
    console.log("from TabContent", element);
    return (
        <div>
            <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} />
        </div>
    );
};

export default TabContent;

import RenderElements from "../../Components/RenderElement";

const TabPane = ({ getChildElements, element }) => {
    return (
        <div>
            <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} />
        </div>
    );
};

export default TabPane;

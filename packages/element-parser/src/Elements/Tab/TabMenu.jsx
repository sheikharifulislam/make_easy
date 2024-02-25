import RenderElements from "../../Components/RenderElement";

const TabMenu = ({ element, getChildElements }) => {
    return (
        <div>
            <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} />
        </div>
    );
};

export default TabMenu;

import RenderElements from "../../Components/RenderElement";

const TabLink = ({ element, getChildElements, setActiveTab, index }) => {
    return (
        <a
            style={{
                display: "inline-block",
                margin: "0 15px",
            }}
            className="tab-link"
            onClick={(e) => {
                e.preventDefault(), setActiveTab(index);
            }}
        >
            <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} />
        </a>
    );
};

export default TabLink;

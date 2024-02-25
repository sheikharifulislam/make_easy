import RenderElements from "../../Components/RenderElement";

const TabLink = ({ element, getChildElements }) => {
    console.log("from TabLink", element);
    return (
        <a
            style={{
                display: "inline-block",
                margin: "0 15px",
            }}
            className="tab-link"
            onClick={(e) => e.preventDefault()}
        >
            <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} />
        </a>
    );
};

export default TabLink;

const TabLink = ({ setActiveTab, renderChild, element }) => {
    console.lo;
    return (
        <a
            style={{
                display: "inline-block",
                margin: "0 15px",
            }}
            className="tab-link"
            onClick={(e) => {
                e.preventDefault();
                setActiveTab(element.id);
            }}
        >
            {/* <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} /> */}
            {/* {children} */}
            {renderChild()}
        </a>
    );
};

export default TabLink;

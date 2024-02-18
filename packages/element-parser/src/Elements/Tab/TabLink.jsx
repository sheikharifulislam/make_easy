const TabLink = ({ children }) => {
    console.log("from tab link", children);
    return (
        <a
            style={{
                display: "inline-block",
                margin: "0 15px",
            }}
            className="tab-link"
            onClick={(e) => e.preventDefault()}
        >
            {children}
        </a>
    );
};

export default TabLink;

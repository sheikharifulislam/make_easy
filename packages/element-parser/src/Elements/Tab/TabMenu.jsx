const TabMenu = ({ children }) => {
    console.log("from tab menus", children);
    return <div className="tab-menu">{children}</div>;
};

export default TabMenu;

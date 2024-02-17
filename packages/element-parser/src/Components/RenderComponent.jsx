import components from "../Elements";

const RenderComponent = ({ item, children }) => {
    // console.log("from item", item);
    const Component = components[item.type];
    return <Component item={item}>{children}</Component>;
};

export default RenderComponent;

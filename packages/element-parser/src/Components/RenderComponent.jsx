import components from "../Elements";

const RenderComponent = ({ item }) => {
    console.log("from item", item);
    const Component = components[item.type];
    return <Component />;
};

export default RenderComponent;

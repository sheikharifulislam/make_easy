import components from "../Elements";

const RenderComponent = ({ item, children, className }) => {
    const Component = components[item.type];
    return (
        <Component item={item} className={className}>
            {children}
        </Component>
    );
};

export default RenderComponent;

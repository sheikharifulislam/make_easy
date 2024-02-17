import RenderComponent from "@easy_made/element-parser";

const Render = ({ elements }) => {
    return (
        <>
            {elements.map((item) => (
                <RenderComponent key={item.id} item={item}>
                    {Array.isArray(item.child) ? <Render elements={item.child} /> : item.content}
                </RenderComponent>
            ))}
        </>
    );
};

export default Render;

import RenderComponent from "@easy_made/element-parser";

const Render = ({ elements }) => {
    return (
        <>
            {elements.map((item) => (
                <RenderComponent key={item.id} item={item}>
                    {Array.isArray(item.child) && <Render elements={elements} />}
                </RenderComponent>
            ))}
        </>
    );
};

export default Render;

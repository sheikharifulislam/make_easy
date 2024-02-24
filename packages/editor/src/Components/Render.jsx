import RenderComponent from "@easy_made/element-parser";
import data from "../data/tab";

const generateClassName = (id) => {
    return `ezy-course_${id}`;
};

const Render = ({ elements }) => {
    // return (
    //     <>
    //         {elements.map((item) => (
    //             <RenderComponent key={item.id} item={item}>
    //                 {Array.isArray(item.child) ? <Render elements={item.child} /> : item.content}
    //             </RenderComponent>
    //         ))}
    //     </>
    // );

    return (
        <>
            {/* {elements.map((id) => {
                const className = generateClassName(id);
                return (
                    <RenderComponent key={data[id].id} item={data[id]} className={className}>
                        {Array.isArray(data[id].children) ? (
                            <Render elements={data[id].children} />
                        ) : (
                            data[id].data.content
                        )}
                    </RenderComponent>
                );
            })} */}

            {elements.map((id) => {
                const className = generateClassName(id);
                return <RenderComponent key={data[id].id} item={data[id]} className={className} />;
            })}
        </>
    );
};

export default Render;

import Element from "./Element";

// const RenderElements = ({ getChildElements, elements, isRenderElement, ...rest }) => {
//     return (
//         <>
//             {elements.map((element, index) => {
//                 const isRender = isRenderElement
//                     ? isRenderElement({
//                           getChildElements,
//                           elements,
//                           index,
//                           ...rest,
//                       })
//                     : true;

//                 console.log("isRenderElement value", isRender);

//                 if (!isRender) {
//                     return;
//                 }

//                 return (
//                     <Element
//                         element={element}
//                         key={element.id}
//                         getChildElements={getChildElements}
//                         childElements={getChildElements(element.id)}
//                         index={index}
//                         {...rest}
//                     />
//                 );
//             })}
//         </>
//     );
// };

const RenderElements = ({ currentElements, data, elProps = {} }) => {
    return (
        <>
            {currentElements.map((id) => {
                console.log({
                    props: elProps[data[id].type],
                    type: data[id].type,
                });
                return (
                    <Element
                        key={id}
                        element={data[id]}
                        {...elProps[data[id].type]}
                        renderChild={(props) => (
                            <RenderElements currentElements={data[id].children} data={data} elProps={props} />
                        )}
                    />
                );
            })}
        </>
    );
};

export default RenderElements;

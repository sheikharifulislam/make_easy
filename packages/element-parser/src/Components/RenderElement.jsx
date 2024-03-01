import { Fragment } from "react";
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

const RenderElements = ({ currentElements, data, elProps = {}, isRenderAble = () => true }) => {
    return (
        <>
            {currentElements.map((id, index) => {
                const isRender = isRenderAble(data[id], index);
                return (
                    <Fragment key={id}>
                        {isRender ? (
                            <Element
                                element={data[id]}
                                {...elProps[data[id].type]}
                                index={index}
                                renderChild={(props, callback) => {
                                    return (
                                        <RenderElements
                                            currentElements={data[id].children}
                                            data={data}
                                            elProps={props}
                                            isRenderAble={callback}
                                        />
                                    );
                                }}
                            />
                        ) : (
                            <></>
                        )}
                    </Fragment>
                );
            })}
        </>
    );
};

export default RenderElements;

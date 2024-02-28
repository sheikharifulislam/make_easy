import { useState } from "react";
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

const RenderElements = ({ currentElements, data }) => {
    const [props, setProps] = useState({});

    function passProps(props) {
        setProps(props);
    }

    return (
        <>
            {currentElements.map((id) => {
                return (
                    <Element key={id} element={data[id]} passProps={passProps}>
                        {data[id].children ? (
                            <RenderElements currentElements={data[id].children} data={data} />
                        ) : (
                            data[id].data.content
                        )}
                    </Element>
                );
            })}
        </>
    );
};

export default RenderElements;

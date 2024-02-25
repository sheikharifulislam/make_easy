import React, { useCallback } from "react";
import RenderElements from "./RenderElement";

const Render = ({ data }) => {
    const getChildElements = useCallback(
        (parentId) => {
            return data[parentId];
        },
        [data]
    );

    return <RenderElements elements={data.root} getChildElements={getChildElements} />;
};

export default Render;

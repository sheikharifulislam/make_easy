import Render from "@easy_made/element-parser";
import elements from "./data/newDataStructure";

const Editor = () => {
    // useEffect(() => {
    //     const css = generateStyles(elements["root"].children, elements);
    //     const style = document.createElement("style");
    //     style.textContent = css;
    //     document.head.appendChild(style);
    // }, []);

    return <Render data={elements} />;
};

export default Editor;

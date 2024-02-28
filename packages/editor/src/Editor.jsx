import RenderElements from "@easy_made/element-parser";
import elements from "./data/tab";

const Editor = () => {
    // useEffect(() => {
    //     const css = generateStyles(elements["root"].children, elements);
    //     const style = document.createElement("style");
    //     style.textContent = css;
    //     document.head.appendChild(style);
    // }, []);

    return <RenderElements currentElements={elements.root.children} data={elements} />;
};

export default Editor;

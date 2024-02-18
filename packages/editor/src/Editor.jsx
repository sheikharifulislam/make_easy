import { useEffect } from "react";
import Render from "./Components/Render";
import elements from "./data/tab";
import generateStyles from "./util/generateStyle";

const Editor = () => {
    useEffect(() => {
        const css = generateStyles(elements["root"].children, elements);
        const style = document.createElement("style");
        style.textContent = css;
        document.head.appendChild(style);
    }, []);

    return <Render elements={elements["root"].children} />;
};

export default Editor;

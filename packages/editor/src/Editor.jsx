import Builder from "./builder";

const Editor = () => {
    const builder = new Builder();

    return builder.render();
};

export default Editor;

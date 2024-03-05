class Builder {
    constructor() {
        if (!Builder.instance) {
            Builder.instance = this;
        }
        return Builder.instance;
    }

    render() {
        return `<RenderElements currentElements={elements.root.children} data={elements} />`;
    }
}

export default Builder;

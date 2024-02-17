import tab from "../data/tab";

class TreeNode {
    constructor(type, name) {
        this.type = type;
        this.name = name;
        this.children = [];
    }
}

function buildTree(nodeData) {
    if (!nodeData) {
        return null;
    }

    const node = new TreeNode(nodeData.type, nodeData.name);
    if (nodeData.children) {
        for (const childData of nodeData.children) {
            const childNode = buildTree(childData);
            if (childNode) {
                node.children.push(childNode);
            }
        }
    }
    return node;
}

const result = buildTree(tab);
console.log(result);

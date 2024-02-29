const TextBlock = ({ children, element }) => {
    return <span className="text-block">{element.data.content}</span>;
};

export default TextBlock;

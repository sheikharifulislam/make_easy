const TextBlock = ({ element }) => {
    console.log("from TextBlock", element);
    return <span className="text-block">{element.data.content}</span>;
};

export default TextBlock;

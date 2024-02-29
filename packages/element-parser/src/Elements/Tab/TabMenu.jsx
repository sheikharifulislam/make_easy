const TabMenu = ({ renderChild, setActiveTab }) => {
    return (
        <div>
            {/* <RenderElements getChildElements={getChildElements} elements={getChildElements(element.id)} />
            {getChildElements(element.id).map((item, index) => (
                <TabLink
                    key={item.id}
                    element={item}
                    getChildElements={getChildElements}
                    setActiveTab={setActiveTab}
                    index={index}
                />
            ))} */}
            {/* {children} */}
            {renderChild({ tabLink: { setActiveTab } })}
        </div>
    );
};

export default TabMenu;

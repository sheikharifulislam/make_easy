const generateStyles = (elements, data, css = "") => {
    console.log(elements, data);
    elements.forEach((id) => {
        css += `.ezy-course_${id}{${objectToCss(data[id].data.style)}}`;
        if (data[id].children) {
            css += generateStyles(data[id].children, data, css);
        }
    });

    return css;
};

const objectToCss = (obj) => {
    let cssString = "";
    for (const prop in obj) {
        // Convert camelCase property names to kebab-case
        const kebabCaseProp = prop.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
        cssString += `${kebabCaseProp}: ${obj[prop]};\n`;
    }

    return cssString;
};

export default generateStyles;

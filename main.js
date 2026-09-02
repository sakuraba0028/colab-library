for (const input of document.querySelectorAll('input')) {
    const { name } = input;
    const replacedName = name.replace(/-/g, match => ' ');
    const placeholderInnerText = `Please enter the ${replacedName)}`;
    input.placeholder.innerText = placeholderInnerText;
}

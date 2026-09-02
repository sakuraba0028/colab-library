const consoleLog = log => console.log(log);

for (const input of document.querySelectorAll('input')) {
    const { name } = input;
    const replacedName = name.replace(/-/g, match => ' ');
    const placeholder = `Please enter the ${replacedName)}`;
    input.placeholder = placeholderInnerText;
}

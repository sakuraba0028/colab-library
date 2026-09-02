const outputConsoleLog = log => {
    let consoleLog = document.querySelector('.console');
    const hasConsole = consoleLog ? true : false;

    if (hasConsole) {
        consoleLog = document.querySelector('p')
        consoleLog.classList.add('console');
        document.querySelector(':is(.container, .main-container)').appendChild(consoleLog);
    }

    consoleLog.innerText = log;
};

for (const input of document.querySelectorAll('input')) {
    const { name } = input;
    const replacedName = name.replace(/-/g, match => ' ');
    const placeholder = `Please enter the ${replacedName)}`;
    input.placeholder = placeholderInnerText;
}

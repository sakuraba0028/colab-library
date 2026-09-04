const colabConsole = log => {
    let consoleLog = document.querySelector('.console');
    const hasConsoleLog = consoleLog ? true : false;

    if (!hasConsoleLog) {
        consoleLog = document.createElement('p');
        consoleLog.classList.add('console');
        document.querySelector(':is(.container, .main-container)').appendChild(consoleLog);
    }

    consoleLog.innerText += `\n${log}`;
};

for (const input of document.querySelectorAll('input')) {
    const { name } = input;
    const replacedName = name.replace(/-/g, () => ' ');
    const hasPlaceholder = input.value ? true : false;

    if (!hasPlaceholder) input.placeholder = `Please enter the ${replacedName}`;
}

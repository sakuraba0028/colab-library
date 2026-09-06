const setInputPlaceholder = {
    for (const input of document.querySelectorAll('input') {
        const { name } = input;
        const replacedName = name.replace(/-/g, ' ');
        const placeholder = `Please enter the ${replacedName}`;
        input.placeholder = placeholder;
    }
};

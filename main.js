for (const input of document.querySelectorAll('input')) {
    const { name } = input;
    const nameText = name.replace(/-/g, match => ' ');
    const innerText = `Please enter the ${nameText)}`;
    input.innerText = innerText;
}

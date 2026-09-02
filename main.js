for (const input of document.querySelectorAll('input')) {
    const { value } = input;
    const valueText = value.replace(/-/g, match => ' ');
    const innerText = `Please enter the ${valueText)}`;
    input.innerText = innerText;
}

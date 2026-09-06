const resetCopyButton = copyButton => copyButton.dataset.isCopied = false;

for (const textInput of document.querySelectorAll('input')) {
    if (textInput.type !== 'text') continue;

    const { name } = textInput;
    const humanizedName = humanize(name);
    textInput.type = 'text'; // textを代入することでcssやquerySelectorで取得できる
    textInput.placeholder = `Please enter the ${humanizedName}`;
}

for (const option of document.querySelectorAll('option')) {
    const { value } = option;
    const humanizedValue = humanize(value);
    option.textContent = humanizedValue;
}

for (const submitButton of document.querySelectorAll('button')) {
    const parentIsForm = submitButton.parentElement.tagName === 'FORM';
    if (!parentIsForm) continue;

    submitButton.innerText = 'Submit';
}

for (const copyButton of document.querySelectorAll('.copy-button')) {
    const observer = new MutationObserver(mutationsList => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes') {
                const attrName = mutation.attributeName;
                const newValue = copyButton.getAttribute(attrName);

                if (newValue === 'true') {
                    copyButton.textContent = 'Copy completed!';
                    navigator.clipboard.writeText(copyButton.value);
                } else {
                    copyButton.textContent = 'Copy';
                }
            }
        }
    });
    observer.observe(copyButton, {
        attributes: true,
        attributeFilter: ['data-is-copied']
    });

    copyButton.dataset.isCopied = false;
    copyButton.addEventListener('click', e => e.target.dataset.isCopied = true);
}

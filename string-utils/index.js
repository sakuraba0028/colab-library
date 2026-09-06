const humanize = (str, isCapitalized = true) => {
    const replacedSpace = str.replace(/-/g, ' ');

    if (isCapitalized) {
        const capitalized = replacedSpace.replace(/^[a-z]/, match => match.toUpperCase());

        return capitalized;
    } else {
        return replacedSpace;
    }
};

function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\s-]+(.)/g, (match, letter) => letter.toUpperCase());
}
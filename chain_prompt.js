function toKebabCase(str) {
    // Validate input: check if str is a non-empty string
    if (typeof str !== 'string' || str.trim() === '') {
        return '';
    }
    
    return str
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
}
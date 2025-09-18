/**
 * String case conversion utility functions
 * @fileoverview This module provides utility functions for converting strings between different case formats.
 * Supports conversion to camelCase and dot.case formats with proper handling of various delimiters.
 * @module StringCaseConverters
 * @version 1.0.0
 * @author GitHub Copilot
 * @since 1.0.0
 */

/**
 * Converts a string to camelCase format by removing delimiters and capitalizing subsequent words
 * 
 * @function toCamelCase
 * @description Transforms input strings containing spaces, underscores, or hyphens into camelCase format.
 * The first word remains lowercase while subsequent words have their first letter capitalized.
 * Empty strings and non-string inputs return an empty string.
 * 
 * @param {string} str - The input string to convert to camelCase
 * @returns {string} The converted camelCase string, or empty string if input is invalid
 * 
 * @example
 * // Basic usage
 * toCamelCase('hello world'); // returns 'helloWorld'
 * toCamelCase('user_name'); // returns 'userName'
 * toCamelCase('my-variable'); // returns 'myVariable'
 * 
 * @example
 * // Edge cases
 * toCamelCase(''); // returns ''
 * toCamelCase('single'); // returns 'single'
 * toCamelCase('UPPER CASE'); // returns 'upperCase'
 * 
 * @throws {TypeError} Does not throw - handles invalid input gracefully by returning empty string
 * @see {@link toDotCase} for dot.case conversion
 * @since 1.0.0
 */

/**
 * Converts a string to dot.case format by replacing delimiters with dots
 * 
 * @function toDotCase
 * @description Transforms input strings containing spaces, underscores, or hyphens into dot.case format.
 * All characters are converted to lowercase and delimiters are replaced with periods.
 * Empty words are filtered out to prevent consecutive dots.
 * 
 * @param {string} str - The input string to convert to dot.case
 * @returns {string} The converted dot.case string, or empty string if input is invalid
 * 
 * @example
 * // Basic usage
 * toDotCase('hello world'); // returns 'hello.world'
 * toDotCase('user_name'); // returns 'user.name'
 * toDotCase('my-variable'); // returns 'my.variable'
 * 
 * @example
 * // Edge cases
 * toDotCase(''); // returns ''
 * toDotCase('single'); // returns 'single'
 * toDotCase('UPPER CASE'); // returns 'upper.case'
 * toDotCase('multiple   spaces'); // returns 'multiple.spaces'
 * 
 * @throws {TypeError} Does not throw - handles invalid input gracefully by returning empty string
 * @see {@link toCamelCase} for camelCase conversion
 * @since 1.0.0
 */

/**
 * Converts a string to camelCase format
 * @param {string} str - The input string to convert
 * @returns {string} The string converted to camelCase
 */
function toCamelCase(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    
    return str
        .toLowerCase()
        .split(/[\s_-]+/)
        .map((word, index) => {
            if (index === 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

module.exports = toCamelCase;

/**
 * Converts a string to dot.case format
 * @param {string} str - The input string to convert
 * @returns {string} The string converted to dot.case
 */
function toDotCase(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    
    return str
        .toLowerCase()
        .split(/[\s_-]+/)
        .filter(word => word.length > 0)
        .join('.');
}

module.exports = { toCamelCase, toDotCase };


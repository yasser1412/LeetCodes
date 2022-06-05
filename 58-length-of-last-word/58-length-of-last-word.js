/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let i = s.length - 1;
    const ignore = ' ';
    while (i > -1 && s[i] !== ignore) i--;
    return s.length - 1 - i
};
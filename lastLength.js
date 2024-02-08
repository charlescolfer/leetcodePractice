/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    let i = 0;
    let lastLength = 0;
    // setting a copy of S on X, as S is final and immutable
    x = s.trim();
    for (let i = 0; i < x.length; i++) {
        if (x[i] == ' ') {
            lastLength = 0;
        }
        else {
            lastLength++;
        }
    }
    return lastLength;
};
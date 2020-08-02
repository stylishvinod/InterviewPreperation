//848  https://leetcode.com/problems/shifting-letters/

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
const shiftingLetters = (S, shifts) => {
    let output = '', totalShift = 0
    for(let i = S.length-1; i >= 0; i--){
        let num = shifts[i], letter = S[i]
        totalShift += num
        output = `${shift(letter, totalShift)}${output}`
    }
    return output
};
const shift = (letter, num) => {
    let char = (letter.charCodeAt(0) - 97 + num) % 26
    return String.fromCharCode(char+97)
}
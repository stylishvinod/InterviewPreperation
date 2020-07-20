// 54 : https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
    if(!matrix.length) return matrix;
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let result = [];
    let dir = 0;
    while (top <= bottom && left <= right) {

        if (dir === 0) {
            for (let i = top; i <= right; i++) {
                result.push(matrix[top][i])
            }
            ++top;
        } else if (dir === 1) {
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            --right;
        } else if (dir === 2) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            --bottom
        } else {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            ++left;
        }
        dir = (dir + 1) %4
    }
    return result;
};
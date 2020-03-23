// combinatorial enumeration strings
// space complexity 2^n
//time complexity  O(n.2^n)
// this is decrease and conquor technique
//thi is BFS approach
// create a binary string with 3 digts with repetetion allowed.
// ex::  000, 001, 010, 011, 100, 101, 110, 111
// all possible output with repettion allowed, with n digits is 2^n


function binaryString(n) {
    if (n === 1) return ['0', '1'];
    let prev = binaryString(n - 1);
    let result = [];
    for (let i = 0; i < prev.length; i++) {
        result.push(`${prev[i]}0`);
        result.push(`${prev[i]}1`);
    }
    return result;
}


// iterative approach


function binaryStringIterative(n) {

    let result = ['0', '1'];
    for (let j = 1; j < n; j++) {
        let newResult = [];
        for (i = 0; i < prev.length; i++) {
            newResult.push(`${result[i]}0`);
            newResult.push(`${result[i]}1`);
        }
        result = newResult;
    }
    return result;
}

//THis is DFS approach
//this is divide and conquor technique.
//time complexity  O(n.2^n)
//space complexity O(n)

function binaryString(n) {
    let arr = [];
    let slate = '';
    binaryStringHelper(slate, n, arr);
    return arr;
}

function binaryStringHelper(slate, n, arr) {
    if (n === 0) return arr.push(slate);
    binaryStringHelper(`${slate}0`, n - 1, arr);
    binaryStringHelper(`${slate}1`, n - 1, arr);

}

// decimalStrings

function decimalString(n) {
    let arr = [];
    let slate = '';
    decimalStringHelper(slate, n, arr);
    console.log("vinod arr length", arr.length)
    return arr;
}

function decimalStringHelper(slate, n, arr) {
    if (n === 0) return arr.push(slate);
    for (let i = 0; i < 10; i++) {
        binaryStringHelper(`${slate}${i}`, n - 1, arr);
    }

}


/// Comon code for either decimal or alphabet
// n -> length of string
// values -> values from which string to be formed
//  ex: [0,1] for binary
//  [a to z] for alphabets [0 to 9 ] for numberical

// dups allowed
function printPermutations(n, values) {
    let slate = '';
    let result = [];
    return helper(n, values, slate, result);

}

function helper(n, values, slate, result) {
    if (n === 0) {
        return result.push(slate)
    };
    for (let i = 0; i < values.length; i++) {
        helper(n - 1, values, `${values[i]}${slate}`, result)
    }
    return result;
}
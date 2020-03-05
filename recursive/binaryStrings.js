// combinatorial enumeration strings
// space complexity 2^n
//time complexity  O(n.2^n)
// this is decrease and conquor technique
//thi is BFS approach
// create a binary string with 3 digts
// ex::  000, 001, 010, 011, 100, 101, 110, 111


function binaryString(n) {
    if(n===1) return ['0','1'];
    let prev = binaryString(n-1);
    let result = [];
    for(let i=0;i<prev.length;i++) {
        result.push(`${prev[i]}0`);
        result.push(`${prev[i]}1`);
    }
    return result;
}


// iterative approach


function binaryStringIterative(n) {

    let result =  ['0', '1'];
    for(let j = 1; j <n; j++) {
        let newResult = [];
        for(i=0;i< prev.length;i++) {
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
    if(n===0) return arr.push(slate);
    binaryStringHelper(`${slate}0`, n-1, arr);
    binaryStringHelper(`${slate}1`, n-1, arr);

}

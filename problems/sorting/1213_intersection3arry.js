
//https://leetcode.com/problems/intersection-of-three-sorted-arrays/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let result= [];
    while(p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
        
        if(arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
            result.push(arr1[p1]);
            ++p1;
            ++p2;
            ++p3
        } else if(arr1[p1] <= arr2[p2]  && arr1[p1] <= arr3[p3]) {
            p1++
        } else if(arr2[p2] <= arr1[p1]  && arr2[p2] <= arr3[p3]) {
            p2++
        } else {
            p3++
        }
        
    }
    return result;
};


//if input is un sorted

var arraysIntersection = function(arr1, arr2, arr3) {
    let hash = {}
    for (const elm of arr1){ hash[elm] = 1;}
    for (const elm of arr2){ if (hash[elm]) hash[elm]=2;}
    for (const elm of arr3){ if (hash[elm]===2) hash[elm]=3;}
    return Object.keys(hash).filter(x => {return hash[x]===3;});
  };
// when no repetetion allowed we can for n! combination for an n digit number/string
// time complexity  (n.n!)
// space complexity O(n)


//46.  https://leetcode.com/problems/permutations/submissions/

const swap = (arr, i, j) => {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
const permuteHelper = (nums, i, results) => {
    if(i === nums.length) {
        results.push([...nums]);
    }
    // choose all possible elemet for ith
    for(let j=i; j < nums.length; j++) {
        swap(nums, i, j);
        permuteHelper(nums, i+1, results);
        swap(nums, i, j) // restore
    }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const results = [];
    permuteHelper(nums, 0, results);
    return results;
};


//  choice II
function binaryString(n) {
    let arr = [];
    let slate = '';
    let allowedToUse  = [1, 2, 3];
    binaryStringHelper(slate, n, arr, allowedToUse);
        console.log("vinod arr length", arr.length)
       return arr;
   }
   
   function binaryStringHelper(slate, n, arr, choices) {
       if(choices.length===0) return arr.push(slate);
       for(let i=0; i<choices.length; i++) {
           let options = choices.filter((a) => a != choices[i]); 
       binaryStringHelper(`${slate}${choices[i]}`, n-1, arr, options);
   
      // binaryStringHelper(`${slate}1`, n-1, arr);
       }
   
   }
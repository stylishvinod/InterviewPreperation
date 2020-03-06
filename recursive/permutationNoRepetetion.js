// when no repetetion allowed we can for n! combination for an n digit number/string
// time complexity  (n.n!)
// space complexity O(n)

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
//https://leetcode.com/problems/repeated-string-match/

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let spaces = 0;
    let letters = '';
    let wordsResult = [];
    
    for(let i = 0 ; i < text.length; i++) {
        if(text[i] === ' ') {
            spaces++;
            if (letters.length > 0) {
                wordsResult.push(letters);
                letters = '';
            } 
        } else {
            letters = letters + text[i]
        }
    }
    
       if(letters.length !== 0) wordsResult.push(letters);
    
        let totalWords = wordsResult.length;
         let gapAfterWords = totalWords === 1 ? spaces : spaces % (totalWords - 1);
         let gapbetweenWords = totalWords === 1 ? 0 : Math.floor(spaces/(totalWords-1));
    
     let result = '';
    
     for(let i = 0; i< totalWords; i++) {
         result = result + wordsResult[i];
         
         if( i < totalWords-1) {
             let j = 0;
             while(j<gapbetweenWords) {
                 result = result + ' ';
                 j++;
             }
             
         } else {
               let j = 0;
             while(j < gapAfterWords) {
                 result = result + ' ';
                 j++;
             }
             
         }
     }
    
    return result;
    
};

//https://leetcode.com/problems/html-entity-parser/

/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    let mask = {
        '&quot;' : '"',
        '&apos;': "'",
        '&amp;': '&',
        '&gt;': '>',
        '&lt;': '<',
        '&frasl;': '/'
    }
    
    
    let finalResult = '';
    
    for(let i = 0 ; i < text.length; i++) {
        
        if(text[i] === '&') {
            let tmp = '';
            while((text[i] !== ';')) {
                tmp = tmp + text[i];
                i++;
            }
        
            if(text[i] === ';') {
                tmp = tmp + text[i];
                
                finalResult = finalResult + (mask.hasOwnProperty(tmp) ? mask[tmp] : tmp);
            } 
        } else {
            finalResult = finalResult + text[i];
        }
    }
    
    return finalResult;
    
};
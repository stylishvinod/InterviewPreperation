//126 -https://leetcode.com/problems/word-ladder-ii/


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let results = [];
    bfs (beginWord, endWord, wordList, results)
    return results;
};



const bfs = (beginWord, endWord, wordList, results) => {
 let visited = new Map();
    let parent = new Map();
    visited.set(beginWord, 1);
    parent.set(beginWord, new Set());
    let q = [beginWord];
    while(q.length) {
        let node = q.shift();
        let neighbours = getNeighbours(wordList, node);
        
        for(let nei of neighbours) {
            if(canVisit(visited, node, nei)) {
                visited.set(nei, visited.get(node) + 1);
                q.push(nei);
                let existing = parent.get(nei) || new Set();
                existing.add(node);
                parent.set(nei, existing)
            }
        }
    }
    // back tracking
 getPath(parent, endWord, results, [endWord]);   
}

const getPath = (parent, node, results, result)=>{
    if(!parent.has(node)) {
        return;
    }
    // if reached to root then add into result
    if(parent.get(node).size === 0) {
        results.push(result);
        return;
    }
    for (const neighbor of parent.get(node)) {
        getPath(parent, neighbor, results, [neighbor, ...result])
    }
}

const canVisit = (visited, node, nei) => {
    if(!visited.has(nei)) return true;
    
    return (visited.get(node) + 1) === visited.get(nei);
}

const getNeighbours = (wordList, node) => {
    let list = [];
    
    for(let word of wordList) {
      if(isOneDiffence(word, node)) {
          list.push(word)
      }
    }
    return list;
}


const isOneDiffence = (word1, word2) => {
    let diff = 0;
    for(let i = 0;i < word1.length; i++) {
        
        if(word1[i] !== word2[i]) {
            diff++;
            if(diff > 1) return false;
        }
    }
    return diff === 1;
}
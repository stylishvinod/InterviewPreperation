// 127:: https://leetcode.com/problems/word-ladder/


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    return bfs(beginWord, endWord, wordList);
    
};

const bfs = (beginWord, endWord, wordList) => {
    let visited = {};
     visited[beginWord] = 1;
    
    let q = [beginWord];
    while(q.length) {
        let node = q.shift();
        
        if(node === endWord) {
            return visited[node];
        }
        
        let children = getChild(node, wordList, visited);
        
        for(let i=0; i< children.length; i++) {
            if(!visited.hasOwnProperty(children[i])) {
                visited[children[i]] = visited[node] + 1;
                q.push(children[i]);
            }
        }
        
    }
    
    return 0;
}

const getChild = (node, wordList, visited) => {
    
    let child = [];
    for(let i = 0; i< wordList.length; i++) {
        let word = wordList[i];
        if(!visited.hasOwnProperty(word)) {
            if(isDistanceOne(node, word)) {
                child.push(word);
            }
        }
    }
    
    return child;
    
}

const isDistanceOne = (source, dest) => {
    let dist = 0;
    for(let i = 0 ; i < source.length; i++) {
        if(source[i] !== dest[i]) {
            dist++;
        }
        if(dist > 1) {
            return false;
        }
    }
    return true;
}
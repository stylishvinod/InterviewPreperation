
// 720. https://leetcode.com/problems/longest-word-in-dictionary/submissions/

var longestWord = function(words) {
    const newWords = words.sort();
    let set = new Set();
    let result = '';

    for(const word of newWords) {
        if(word.length === 1 || set.has(word.substring(0, word.length-1))) {
            
            if(result.length < word.length) {
                result = word;
            }
            set.add(word)
        }
    }
    return result;
};


//  using Tries
/**
 * @param {string[]} words
 * @return {string}
 */
class TrieNode {
    constructor(char) {
        this.char = char;
        this.isWord = false;
        this.children = new Array(26).fill(null);
    }
}
var longestWord = function(words) {
    let trie =  buildTrie(words);
    //bfs
    let queue = [trie.root];
    let distance = new Map();
    let parent = new Map();
        distance.set(trie.root, 0);
        parent.set(trie.root, null);
    let max = trie.root;
    while(queue.length) {
        let node = queue.shift();
        let neighbours = getNeighbors(node);
        for(let nei of neighbours) {
            distance.set(nei, distance.get(node) + 1)
            parent.set(nei, node);

            if(distance.get(nei) > distance.get(max)) {
                max = nei;
            }
            queue.push(nei);
        }
    }
    
     // back track to get the word
    const word = [];
    let node = max;
    while(node) {
        word.unshift(node.char);
        node = parent.get(node);
    }
    return word.join('');
    
    
};


const buildTrie = (words) => {
    const trie = new Trie();
    
    for(const word of words ) {
        trie.insertTrie(word) 
    }
    
    return trie;
}

const getNeighbors = node => {
    const neighbors = [];
    for (const t of node.children) {
        if(t && t.isWord) {
            neighbors.push(t);
        }
    }
    return neighbors;
}


class Trie {
    constructor() {
    this.root = new TrieNode();
    }

    getIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    
    insertTrie(word) {
        if(!word) return;
        
        let currerntNode = this.root;
        for(const char of word) {
            let index = this.getIndex(char);
            
            if(!currerntNode.children[index]) {
                currerntNode.children[index] = new TrieNode(char);
            }
            currerntNode =   currerntNode.children[index] ;
        }
        currerntNode.isWord = true;
    }
}


//https://leetcode.com/problems/number-of-matching-subsequences/



/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    
    const trie = new Trie();
    for(let word of words) {
        trie.insert(word);
    }
    
    trie.dfs(trie.root, s, 0);
    
    return trie.result;
};



class TrieNode {
    constructor(chr) {
        this.chr = chr;
        this.child = new Array(26).fill(null);
        this.isWord = false;
        this.count = 0;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode();
        this.result = 0
    }
    
    getIndex(chr) {
        return chr.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    
    insert(word) {
        let node = this.root;

        for(let char of word) {
            const index = this.getIndex(char)
            
            if(!node.child[index]) {
                node.child[index] = new TrieNode(char);
            }
            
            node = node.child[index];
            
        }
        
        node.isWord = true;
        node.count++;
    }
    
    
    dfs(node, s, i) {
        if(!node || s.length <= i) return;
        
        // check is child char is matching with s
        for(let child of node.child) {
            if(!child) continue;
            
            const chr = child.chr;
            let k = i;
            
            while(k < s.length && s[k] !== chr) {
                k++;
            }
            
            if( k< s.length && s[k] === chr) {
                if(child.isWord) {
                    this.result += child.count
                }
                // launch DFS for next match
                this.dfs(child, s, k+1)
            }
        }
        
    }
}
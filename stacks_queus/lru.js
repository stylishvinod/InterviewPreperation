
//146. https://leetcode.com/problems/lru-cache/submissions/


class Node {
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key)) {
        return -1;
    }
    const node = this.map.get(key);
    const result = node.value;
    console.log({node})
    this.extractAndAppend(node);
    return result;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // if node already exist then simply update, extact and append at the end
    if(this.map.has(key)) {
        const node = this.map.get(key);
        node.value = value;
        this.extractAndAppend(node);
        return;
    }
    // Create node
    const node = new Node(key, value);

    this.map.set(key, node); // update map

    // if queue is empty
    if(!this.tail) {
        this.head = node;
        this.tail = node;
    } else {
        // add at the end
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    // increment the size
    this.size++;
    // if size is more than capacity then remove the first
    if(this.size > this.capacity) {
        // extract from the front
        const first = this.head;        
        const second = this.head.next;
        second.prev = null;
        first.next = null; // remove first node next pointer
        this.head = second; // new head will be second node
        this.map.delete(first.key); // Delete existing from hash map
        this.size = this.capacity; // update capacity as full
    }
    
};
LRUCache.prototype.extractAndAppend = function (node) {
    // Do extraction
    // if size is 1 or node is already at the end
    if(this.size === 1 || this.tail === node) {
        return;
    }
    const prev = node.prev;
    const next = node.next;

    if(prev) {
        // if prev exist, then change next node for prev
        prev.next = next;
    } else {
        // prev null, so next will the new head
        this.head = next;
    }
    if(next) {
        // if next exist, then next prev will be current node's prev
        next.prev = prev;
    } else {
        // next node is null, i.e. current will be new tail
        this.tail = prev;
    }
    // Append
    this.tail.next = node;
    node.prev = this.tail;
    node.next = null;
    this.tail = node;    
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
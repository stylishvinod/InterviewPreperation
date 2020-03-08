// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.



/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.minHeap = new MinHeap();
    this.k = k;
    nums.forEach(n => this.add(n));
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.minHeap.leangthOfHeap() < this.k) {
        this.minHeap.addEle(val);
    } else if(this.minHeap.getTop() < val) {
        this.minHeap.addEle(val);
        this.minHeap.removeTop();
    }

    return this.minHeap.getTop();
    
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class MinHeap {
    constructor(compare){
        this.heap = [];
        if(compare) {
            this.compare = compare;            
        }
    }
    compare(a, b){
        return a - b;
    }
    swap(i, j) {
        const t = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = t;
    }
    parent(i){
        return Math.floor((i-1)/2);
    }
    left(i) {
        return i * 2 + 1;
    }
    right(i) {
        return i * 2 + 2;
    }
    heapifyUp(i){
        if(i === 0) {
            return;
        }
        const parent = this.parent(i);
        // if parent > item then move up
        if(this.compare(this.heap[parent], this.heap[i]) > 0) {
            // swap with parent
            this.swap(i, parent);
            this.heapifyUp(parent);
        }        
    }
    heapifyDown(i) {
        const n = this.heap.length;
        const left = this.left(i);
        const right = this.right(i);
        let j = i;
        // check if needs to swap with left
        if(left < n && this.compare(this.heap[j], this.heap[left]) > 0) {
            j = left;
        }
        // check if needs to swap with right
        if(right < n && this.compare(this.heap[j], this.heap[right]) > 0) {
            j = right;
        } 
        // swap if needed
        if(i !== j) {
            this.swap(i, j);
            this.heapifyDown(j)
        }
    }
    addEle(item) {
        this.heap.push(item);
        const i = this.heap.length - 1;
        this.heapifyUp(i);        
    }
    getTop(){
        return this.heap[0];
    }
    removeTop(){
        // swap top from last
        this.swap(0, this.heap.length - 1);
        const top = this.heap.pop();
        this.heapifyDown(0);
        return top;
    }
    leangthOfHeap() {
        return this.heap.length;
    }
}

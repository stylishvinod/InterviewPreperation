


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

var MedianFinder = function() {
    const compare = (a, b) => b - a;
     this.minHeap = new minHeap();
     this.maxHeap = new minHeap(compare);  
 };

MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.leangthOfHeap() === 0 || this.maxHeap.getTop() >= num){
                this.maxHeap.addEle(num);
    } else {
        this.minHeap.addEle(num);
    }
    
    if(this.maxHeap.leangthOfHeap() > this.minHeap.leangthOfHeap() + 1){
        this.minHeap.addEle(this.maxHeap.removeTop());
    }
    if(this.maxHeap.leangthOfHeap() < this.minHeap.leangthOfHeap()){
        this.maxHeap.addEle(this.minHeap.removeTop());
    }  
};


MedianFinder.prototype.findMedian = function() {
    if(this.maxHeap.leangthOfHeap() === this.minHeap.leangthOfHeap()){
        return ((this.maxHeap.getTop() + this.minHeap.getTop())/ 2);
    }
    return this.maxHeap.getTop();
};




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

class MedianFinder {
	constructor() {
      const compare = (a, b) => b - a;
     this.minHeap = new MinHeap();
     this.maxHeap = new MinHeap(compare);  
 };
    
    
    addNum(num) {
    if(this.maxHeap.leangthOfHeap() === 0 || this.maxHeap.getTop() >= num){
                this.maxHeap.addEle(num);
    } else {
        this.minHeap.addEle(num);
    }
    
    if(this.maxHeap.leangthOfHeap() > this.minHeap.leangthOfHeap() + 1){
        this.minHeap.addEle(this.maxHeap.removeTop());
    }
    if(this.maxHeap.leangthOfHeap() < this.minHeap.leangthOfHeap()){
        this.maxHeap.addEle(this.minHeap.removeTop());
    }  
};


findMedian() {
    if(this.maxHeap.leangthOfHeap() === this.minHeap.leangthOfHeap()){
        return ((this.maxHeap.getTop() + this.minHeap.getTop())/ 2);
    }
    return this.maxHeap.getTop();
      console.log("vinod min heap",this.minHeap.getHeap() )
    console.log("vinod max heap",this.maxHeap.getHeap() )
};
}

function newFun() {
	const fun = new MedianFinder();
    fun.addNum(1);
    fun.addNum(2);
    fun.findMedian();

}

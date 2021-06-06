// class MaxHeap {

//     constructor () {
//         /* Initialing the array heap and adding a dummy element at index 0 */
//         this.heap = [null]
//     }

//     getMax () {
//         /* Accessing the min element at index 1 in the heap array */
//         return this.heap[1]
//     }

    // insert (node) {

    //     /* Inserting the new node at the end of the heap array */
    //     this.heap.push(node)
        
    //     /* Finding the correct position for the new node */
    
    //     if (this.heap.length > 1) {
    //         let current = this.heap.length - 1
            
    //         /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
    //         while (current > 1 && this.heap[Math.floor(current/2)] < this.heap[current]) {
            
    //             /* Swapping the two nodes by using the ES6 destructuring syntax*/
    //             [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
    //             current = Math.floor(current/2)
    //         }
    //     }
    //}
// }

// let MaxHeapObj = new MaxHeap();
// MaxHeapObj.insert(5);
// MaxHeapObj.insert(2);
// MaxHeapObj.insert(1);
// MaxHeapObj.insert(7);
// console.log("max ",MaxHeapObj.getMax());


var MedianFinder = function() {
    this.heap = [];
};

MedianFinder.prototype.addNum = function(node) {
        /* Inserting the new node at the end of the heap array */
        this.heap.push(node)
        /* Finding the correct position for the new node */
        if (this.heap.length > 1) {
            let current = this.heap.length - 1
            
            /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
            while (current > 1 && this.heap[Math.floor(current/2)] < this.heap[current]) {
            
                /* Swapping the two nodes by using the ES6 destructuring syntax*/
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
};
MedianFinder.prototype.getMax = function() {
    return this.heap[1]
};
MedianFinder.prototype.findMedian = function() {
    let middle = null;
    console.log("this.heap",this.heap);
    if(this.heap.length % 2 == 0) { 
        // even 
        console.log("this heap even");
        middle = this.heap[this.heap.length / 2 - 1 ] + this.heap[this.heap.length / 2];
        console.log("this heap even", middle);
        middle = middle/2;
    } else {
        // odd case 
        console.log("this heap odd");
        middle = this.heap[this.heap.length / 2];
    }
    return middle;
};
let MaxHeapObj = new MedianFinder();
MaxHeapObj.addNum(5);
MaxHeapObj.addNum(2);
MaxHeapObj.addNum(1);
MaxHeapObj.addNum(7);
console.log("Max ",MaxHeapObj.getMax());
console.log("findMedian ",MaxHeapObj.findMedian());

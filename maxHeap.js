//      0
//     / \
//    1   2
//   /\   /\
//  3 4  5 6

class MaxHeap {
    constructor(){
        this.arr = [];
    }
    left(index){
        return (2 * index + 1);
    }
    right(index){
        return (2 * index + 2);
    }
    parent(index) {
        return Math.floor((index-1)/2);
    }
    swap(index1, index2){
        let tmp = this.arr[index1];
        this.arr[index1] = this.arr[index2];
        this.arr[index2] = tmp;
    }
    insert(number) {
        this.arr.push(number);
        let currentIndex = this.arr.length-1;
        while(currentIndex > 0 && this.arr[currentIndex] > this.arr[this.parent(currentIndex)]  ){
            this.swap(currentIndex, this.parent(currentIndex));
            currentIndex = this.parent(currentIndex);
        }
    }

    heapify(currentIndex){
        let left = this.left(currentIndex);
        let right = this.right(currentIndex);
        let largeNumIndex = currentIndex;

        if(left < this.arr.length && this.arr[left] > this.arr[currentIndex] ){
            largeNumIndex = left;
        }
        if(right < this.arr.length && this.arr[right] > this.arr[largeNumIndex] ){
            largeNumIndex = right;
        }
        if(largeNumIndex != currentIndex) {
            this.swap(largeNumIndex, currentIndex);
            this.heapify(largeNumIndex);
        }
    }
    extractElement(){
        // underflow 
        if(this.arr.length == 0 ) return "No Element"
        let topElement = this.arr[0];
        this.swap(0, this.arr.length-1);
        this.arr.pop();
        this.heapify(0);
        return topElement;
    }
    getTopElement() {
        return this.arr[0];
    }
}
let maxHeapObj = new MaxHeap();
maxHeapObj.insert(5); console.log(maxHeapObj.arr);
maxHeapObj.insert(1); console.log(maxHeapObj.arr);
maxHeapObj.insert(9); console.log(maxHeapObj.arr);
maxHeapObj.insert(2); console.log(maxHeapObj.arr);
maxHeapObj.insert(7); console.log(maxHeapObj.arr);
console.log(maxHeapObj.getTopElement())
maxHeapObj.extractElement();
console.log(maxHeapObj.arr);

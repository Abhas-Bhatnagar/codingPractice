class MinHeap{
    constructor(){
        this.arr = [];
    }
    swap(index1, index2){
        let temp = this.arr[index1];
        this.arr[index1] = this.arr[index2];
        this.arr[index2] = temp;
    }
    left(current_index){
        return 2*current_index + 1;
    }
    right(current_index){
        return 2*current_index + 2;
    }
    parent(index){
        return Math.floor((index-1)/2);
    }
    getMinNode(){
        return this.arr[0];
    }
    insertNode(node){ // overflow
        this.arr.push(node);
        let current_index = this.arr.length -1;
        while(current_index > 0 && this.arr[current_index] < this.arr[this.parent(current_index)]){
            this.swap(current_index, this.parent(current_index));
            current_index = this.parent(current_index);
        }
    }
    extractMinNode(){ // underflow
        if (!this.arr.length) {
            return -1;
        }
        let minNode = this.arr[0];
        this.swap(0, this.arr.length -1);
        this.arr.pop();

        minHeapify(0);
        return minNode;
    }
    minHeapify(current_index){
        let left = this.left(current_index);
        let right = this.right(current_index);
        let smallest = current_index;
        if (left <= this.arr.length - 1 && this.arr[left] < this.arr[current_index]) {
            smallest = left;
        }
        if (right <= this.arr.length - 1 && this.arr[right] < this.arr[current_index]) {
            smallest = right;
        }
        if (smallest != current_index) {
            this.swap(current_index, smallest);
            this.minHeapify(smallest);
        }
    }
}



let heapObj = new MinHeap();

heapObj.insertNode(15); console.log(heapObj.arr);
heapObj.insertNode(5); console.log(heapObj.arr);
heapObj.insertNode(4); console.log(heapObj.arr);
heapObj.insertNode(45); console.log(heapObj.arr);


heapObj.insertNode(3); console.log(heapObj.arr);
heapObj.insertNode(2); console.log(heapObj.arr);
heapObj.insertNode(1); console.log(heapObj.arr);

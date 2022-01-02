class priorityQueue {
    constructor(pqueueType, comparatorFun) {
        this.pqueue = [];
        this.size = -1;    
        this.pqueueType = pqueueType ? pqueueType : "max";
        this.comparatorFun = comparatorFun;
    }
    parent(index){
        return parseInt((index - 1) / 2);
    }
    leftChild(index){
        return parseInt((2 * index) + 1);
    }
    rightChild(index){
    	return parseInt((2 * index) + 2);
    }
    comparator(arg1, arg2){
        if (typeof this.comparatorFun == "function") {
            return this.comparatorFun(arg1, arg2);
        } else {
            return arg1.key < arg2.key;
        }
    }
    shiftUp(index){
        if (this.pqueueType == "max") {
            while (index > 0 && this.pqueue[this.parent(index)].key < this.pqueue[index].key) {
                // Swap parent and current node
                this.swap(this.parent(index), index);
                // Update i to parent of i
                index = this.parent(index);
            }    
        } else {
            while (index > 0 && this.pqueue[this.parent(index)].key > this.pqueue[index].key) {
                // Swap parent and current node
                this.swap(this.parent(index), index);
                // Update i to parent of i
                index = this.parent(index);
            }
        }
        
    }
    swap(index1, index2){
        let temp = this.pqueue[index1];
        this.pqueue[index1] = this.pqueue[index2];
        this.pqueue[index2] = temp;
    }
    shiftDown(index){
        let maxOrMinIndex = index;
        if (this.pqueueType == "max") {
            // Left Child
            let l = this.leftChild(index);
            if (l <= this.size && this.pqueue[l].key > this.pqueue[maxOrMinIndex].key) {
                maxOrMinIndex = l;
            }
            // Right Child
            let r = this.rightChild(index);
            if (r <= this.size && this.pqueue[r].key > this.pqueue[maxOrMinIndex].key) {
                maxOrMinIndex = r;
            } 
        } else {
            // Left Child
            let l = this.leftChild(index);
            if (l <= this.size && this.pqueue[l].key < this.pqueue[maxOrMinIndex].key) {
                maxOrMinIndex = l;
            }
            // Right Child
            let r = this.rightChild(index);
            if (r <= this.size && this.pqueue[r].key < this.pqueue[maxOrMinIndex].key) {
                maxOrMinIndex = r;
            }
        }
        
        if (index != maxOrMinIndex) {
            this.swap(index, maxOrMinIndex);
            this.shiftDown(maxOrMinIndex);
        }
    }
    insert(p){
        this.size = this.size + 1;
        this.pqueue[this.size] = p;
        // Shift Up to maintain heap property
        this.shiftUp(this.size);
    }
    extractElement(){
        let result = this.pqueue[0];
        // Replace the value at the root
        // with the last leaf
        this.pqueue[0] = this.pqueue[this.size];
        this.size = this.size - 1;
        // Shift down the replaced element
        // to maintain the heap property
        this.shiftDown(0);
        return result;
    }
    changePriority(index, p){
        let oldp = this.pqueue[index];
        this.pqueue[index] = p;
        if (p > oldp) {
            this.shiftUp(index);
        }
        else {
            this.shiftDown(index);
        }
    }
    getTopElement(){
        return this.pqueue[0];
    }
}
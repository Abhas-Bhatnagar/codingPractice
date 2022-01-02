class priorityQueue {
    constructor(pqueueType) {
        this.pqueue = [];
        this.size = -1;    
        this.pqueueType = pqueueType ? pqueueType : "max";
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
    getSize() {
        return this.size+1;
    }
}

class Solution
{
    //Function to find the shortest distance of all the vertices
    //from the source vertex S.
    dijkstra(V,adj,source) {
        
        let minPQueue = new priorityQueue("min");
        let distance = [];

        distance[source] = 0;
        minPQueue.insert({key : 0 , data: source});    
        for (let nodeNum = 0; nodeNum < V; nodeNum++) {
            if(nodeNum == source) continue;
            distance[nodeNum] = Infinity;
            minPQueue.insert({key : Infinity , data: nodeNum});    
        }

        while(minPQueue.size){
            let currentNode = minPQueue.extractElement();
            let currentNodeNum = currentNode.data;
            let currentNodeWt = currentNode.key;

            let adjList = adj[currentNodeNum];
            for (let itr = 0; itr < adjList.length; itr++) {
                if(currentNodeWt + adjList[itr][1] < distance[adjList[itr][0]]) {
                    distance[adjList[itr][0]] = currentNodeWt + adjList[itr][1];
                    minPQueue.insert({key : distance[adjList[itr][0]] , data: adjList[itr][0]})
                }
            }
        }
        return distance;
    }
    
}
(function main() {
    let pqueue = new priorityQueue("max");
    pqueue.insert({key :45 , data : null});
    // pqueue.insert({key :20 , data : null});
    // pqueue.insert({key :14 , data : null});
    // pqueue.insert({key :12 , data : null});
    // pqueue.insert({key :31 , data : null});
    // pqueue.insert({key :7 , data : null});
    // pqueue.insert({key :11 , data : null});
    // pqueue.insert({key :13 , data : null});
    // pqueue.insert({key :7 , data : null});
    console.log(pqueue)
})();

/**
9 14
0 1 4
1 2 8
2 3 7
3 4 9
4 5 10
5 6 2
6 7 1
7 0 8
1 7 11
7 8 7
2 8 2
8 6 6
2 5 4
2 5 14
0
 */
// https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1#
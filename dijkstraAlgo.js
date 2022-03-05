class priorityQueue {
    constructor(comparator) {
        this.pqueue = [];
        this.size = -1;    
        this.comparator = comparator ? comparator : (a,b)=>{ return a < b ;};
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
        while (index > 0 && this.comparator(this.pqueue[this.parent(index)], this.pqueue[index])) {
            // Swap parent and current node
            this.swap(this.parent(index), index);
            // Update i to parent of i
            index = this.parent(index);
        }    
    }
    swap(index1, index2){
        let temp = this.pqueue[index1];
        this.pqueue[index1] = this.pqueue[index2];
        this.pqueue[index2] = temp;
    }
    shiftDown(index){
        let maxOrMinIndex = index;
        // Left Child
        let l = this.leftChild(index);
        
        if ( l <= this.size && this.comparator(this.pqueue[maxOrMinIndex], this.pqueue[l]) ) {
            maxOrMinIndex = l;
        }
        // Right Child
        let r = this.rightChild(index);
        if ( r <= this.size && this.comparator(this.pqueue[maxOrMinIndex], this.pqueue[r]) ) {
            maxOrMinIndex = r;
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

class dijkstra {
    getMisDistance(adj,source) {
        let minPQueue  = new priorityQueue((a,b)=>{return a > b});
        let distance = {};
    
        distance[source] = 0;
        minPQueue.insert({key : 0 , data: source});    

        for(let nodeName in adj) {
            if(nodeName == source) continue;
            distance[nodeName] = Infinity;
            minPQueue.insert({key : Infinity , data: nodeName});    
        }
        //console.log(distance)
        while(minPQueue.size){
            let currentNode = minPQueue.extractElement();
            let currentNodeName = currentNode.data;
            let currentNodeWt = currentNode.key;
    
            let adjList = adj[currentNodeName];
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

let testCase = [
    [
        {
            "0" : [[ 1 ,25 ]],
            "1" : [[ 2 ,32 ]],
            "2" : [[ 3 ,33 ]],
            "3" : [[]]
        },
        "0"
    ],
    [
        {
            "0" : [ [ "1", 4 ], [ "7", 8 ] ],
            "1" : [ [ "0", 4 ], [ "2", 8 ], [ "7", 11 ] ],
            "2" : [ [ "1", 8 ], [ "3", 7 ], [ "8", 2 ], [ "5", 4 ], [ "5", 14 ] ],
            "3" : [ [ "2", 7 ], [ "4", 9 ] ],
            "4" : [ [ "3", 9 ], [ "5", 10 ] ],
            "5" : [ [ "4", 10 ], [ "6", 2 ], [ "2", 4 ], [ "2", 14 ] ],
            "6" : [ [ "5", 2 ], [ "7", 1 ], [ "8", 6 ] ],
            "7" : [ [ "6", 1 ], [ "0", 8 ], [ "1", 11 ], [ "8", 7 ] ],
            "8" : [ [ "7", 7 ], [ "2", 2 ], [ "6", 6 ] ]
        },
        "0"
    ]
];
let djObj = new dijkstra();
let output = djObj.getMisDistance(testCase[1][0],testCase[1][1]);
console.log(output)



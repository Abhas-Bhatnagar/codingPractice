class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    printNodesAtDisK(node, k) {
        // base cases
        debugger
        if(!node) return -1;
        let left = this.printNodesAtDisK(node.left, k) + 1;
        let right = this.printNodesAtDisK(node.right, k) + 1;
        if(left == -1 && left == right) return -2;

        let maxNodeValue = Math.max(left, right);
        if(  ( k == left  || k == right) ) {
            console.log(node.value);
            return maxNodeValue;
        } else {
            return maxNodeValue;
        }

    }
}

function main() {
    let binaryTree = new BinaryTree();
    binaryTree.root = new Node(1);
    binaryTree.root.left = new Node(2);
    binaryTree.root.right = new Node(3);
    binaryTree.root.left.left = new Node(4);
    binaryTree.root.left.right = new Node(5);
    binaryTree.root.right.left = new Node(6);
    binaryTree.root.right.right = new Node(7);
    binaryTree.root.right.left.right = new Node(8);

    let node = binaryTree.root//.right.left;
    // console.log(node)
    console.log("\n")
    
    for (let itr = 0; itr < 4; itr++) {
        binaryTree.printNodesAtDisK(node, itr);
        console.log("---")
    }
    
    // case is k is larger than height of tree    
}
main();
// https://www.geeksforgeeks.org/print-nodes-distance-k-leaf-node/

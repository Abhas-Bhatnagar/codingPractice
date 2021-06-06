const util = require('util')

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
    setLeftChild(node) {
        this.left = node;
    }
    setRightChild(node) {
        this.right = node;
    }
    print() {
        console.log("data ",this.data);
    }
    isNodeBw(){
        if(this.left && !(this.left.data < this.data)) {
            return false;
        }
        if(this.right && !(this.data < this.right.data)) {
            return false;
        }
        return true;
    }
}


let node3 = new Node(1);
let node4 = new Node(2);

let node2 = new Node(3);
node2.setLeftChild(node3);
node2.setRightChild(node4);
 
let root = new Node(4);
root.setLeftChild(node2);




/** Test case 1
let node8 = new Node(4);
let node9 = new Node(6);
let node6 = new Node(2);

let node7 = new Node(5);
node7.setLeftChild(node8);
node7.setRightChild(node9);

let node3 = new Node(3);
node3.setLeftChild(node6);
node3.setRightChild(node7);

let node4 = new Node(2);
let node5 = new Node(4);

let node2 = new Node(4);
node2.setLeftChild(node4);
node2.setRightChild(node5);

let root = new Node(1);
root.setLeftChild(node2);
root.setRightChild(node3);
 */

//console.log(util.inspect(root, {showHidden: false, depth: null}))


function inOrderTraversal(node) {
    if(!node) {
        return ;
    }
    inOrderTraversal(node.left);
    node.print();
    inOrderTraversal(node.right);
}
//inOrderTraversal(root);
////////////////////////////////
let maxPointer = null;

function getMaxAndCheckBST(node){
    let isBst = false, sum = null;
    

    if(!node) {
        return {
            isBst : isBst,
            sum: sum
        }
    }

    let leftChildObj = {
        isBst: true,
        sum: 0
    }
    if(node.left) leftChildObj = getMaxAndCheckBST(node.left);
    
    let rightChildObj = {
        isBst: true,
        sum: 0
    };
    if(node.right) rightChildObj = getMaxAndCheckBST(node.right);
    
    // leftChildObj.isBST
    // leftChildObj.sum
    // rightChildObj.isBST
    // rightChildObj.sum
    //console.log(util.inspect(leftChildObj.isBST , {showHidden: false, depth: null}))
    if(leftChildObj.isBst && rightChildObj.isBst && node.isNodeBw()) {
        isBst = true;
        sum = node.data + leftChildObj.sum + rightChildObj.sum;
    } 
    // else if (leftChildObj.isBst && rightChildObj.isBst) {
    //     isBst = false;
    //     sum = Math.max(leftChildObj.sum , rightChildObj.sum);
    // } else if (!leftChildObj.isBst && rightChildObj.isBst) {
    // }
    if(isBst) {
        if(maxPointer == null) {
            maxPointer = sum;
        } else {
            maxPointer = Math.max(maxPointer, sum);
        }
        
    }
    return {
        isBst : isBst,
        sum: sum
    }
}
console.log(util.inspect(root, {showHidden: false, depth: null}))
console.log(getMaxAndCheckBST(root))
console.log("maxPointer", maxPointer)
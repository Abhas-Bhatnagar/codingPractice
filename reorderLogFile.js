class TreeNode {
    hashMap = {};
    constructor(left = null, right = null, data) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
    setLeftChild(node) {
        this.left = node;
    }
    setRightChild(node) {
        this.right = node;
    }
    printTree() {
        console.log(this)
    }
    printInOrder(node) {
        if(!node) 
            return;
        else {
            this.printInOrder(node.left);
            console.log(node.data);
            this.printInOrder(node.right);
        }
    }
    cloneTree(node) {
        if(!node) 
            return null;
        else {
            let newNode = new TreeNode( null, null , node.data);
            this.hashMap[node] = newNode;
            newNode.left = this.cloneTree(node.left);
            newNode.right = this.cloneTree(node.right);
            return newNode;
        }
    }
}
let rootNode = new TreeNode( null, null , 5)

let node1 = new TreeNode( null, null , 2)
let node2 = new TreeNode( null, null , 7)

rootNode.setLeftChild(node1)
rootNode.setRightChild(node2)


//rootNode.printInOrder(rootNode);
let newTree = rootNode.cloneTree(rootNode);
newTree.printTree();


node1.setLeftChild(new TreeNode( null, null , 1))
rootNode.printTree()
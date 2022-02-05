
 // Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function getBTree(preorder, preStart, preEnd, inorder, inStart, inEnd, inorderHashMap){
    // base cases
    
    let currentNodeValue = preorder[preStart];
    let currentNodeIndex = inorderHashMap[currentNodeValue];
    
    let node = new TreeNode(currentNodeValue, null, null);
    
    // console.log(node)
    // left side how  many nodes
    let leftNodeCount = currentNodeIndex - inStart;
    // right side how many nodes
    let rightNodeCount = inEnd - currentNodeIndex;
    if(leftNodeCount >= 1 ) {
        node.left = getBTree(preorder, preStart+1, preStart+leftNodeCount, inorder, inStart, currentNodeIndex-1, inorderHashMap);    
    }
    if(rightNodeCount >= 1) {
        node.right = getBTree(preorder, preStart+leftNodeCount+1, preStart+leftNodeCount+rightNodeCount, inorder, currentNodeIndex+1, inEnd, inorderHashMap);    
    }
    
    return node;
}
var buildTree = function(preorder, inorder) {
    let inorderHashMap = {};
    for(let itr = 0; itr < preorder.length ; itr++) {
        inorderHashMap[inorder[itr]] = itr;
    }
    
    let root = getBTree(preorder, 0, preorder.length -1, inorder, 0, inorder.length-1, inorderHashMap);
    
    return root;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 function inversion(node){
    if(!node) {
        return;
    } 
    inversion(node.left);
    inversion(node.right);
    
    let tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;
    
    
}
var invertTree = function(root) {
    inversion(root);
    return root;
};

//https://leetcode.com/problems/invert-binary-tree/
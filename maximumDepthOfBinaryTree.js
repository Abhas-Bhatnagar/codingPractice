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
 * @return {number}
 */
function inorder(node, arr, level){
    if(!node) {
        return ;
    } else {
        level++;
        arr[0] = Math.max(arr[0], level);
        inorder(node.left, arr, level);
        inorder(node.right, arr, level);
        
        
    }
}
var maxDepth = function(root) {
    let arr = [0];
    inorder(root, arr, 0);
    return arr[0];
};

//https://leetcode.com/problems/maximum-depth-of-binary-tree/
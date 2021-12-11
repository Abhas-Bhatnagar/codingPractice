/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 function inorder(node1, node2, parent1, child){
    if(!node1 || !node2){
        if(node2) {
            parent1[child] = node2;
            return;
        } else {
            return;
        }
    } else {
        inorder(node1.left, node2.left, node1, "left");
        node1.val += node2.val;
        inorder(node1.right, node2.right, node1, "right");
    }
}
var mergeTrees = function(root1, root2) {
    
    if(root1 && root2) {
        inorder(root1, root2, null, null);
        return root1;
    } else if(root1 && !root2){
        return root1;        
    } else if (!root1 && root2) {
        return root2;
    } else {
        return null;
    }
};

//https://leetcode.com/problems/merge-two-binary-trees/
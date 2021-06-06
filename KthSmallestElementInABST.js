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
 * @param {number} k
 * @return {number}
 */
 let pointer = {
    index : 0,
    value : null,
    exec : true
};
var kthSmallest = function(root, k) {
    pointer = {
        index : 0,
        value : null,
        exec : true
    };
    inorder(root, k);
    return pointer.value ;
};


function inorder(node, k ) {
    if(!node || !pointer.exec) {
        return;
    }
    inorder(node.left, k );
    pointer.index++;
    if(pointer.index == k) {
        pointer.value = node.val;
        pointer.exec = false;
    }
    inorder(node.right, k );
    
}
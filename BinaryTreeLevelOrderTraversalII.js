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
 * @return {number[][]}
 */
 function levelOrderTraversal(queue, result) {
    
    while(queue.length) {
        let currentLevelNodes = queue.length;
        let tempQueue = [];
        for(let itr = 0 ; itr < currentLevelNodes; itr++) {
            let currentNode = queue[itr];
            if(currentNode.left)
                tempQueue.push(currentNode.left);
            if(currentNode.right)
                tempQueue.push(currentNode.right);   
        }
        if(tempQueue.length)
            result.push(tempQueue.map(  (node) => { return node.val; } ) );
        queue = tempQueue;
    }

}
var levelOrderBottom = function(root) {
    if(!root) return [];
    let queue = [root], result = [[root.val]];
    levelOrderTraversal(queue, result);
    return result.reverse();
};
//https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 function downwardDistanceK(node, k, result) {
    if(!node || k < 0) {
       return;
    }
   // console.log(node.val  + "_" + k)
    if(k == 0) {
        result.push(node.val);
    }
    k--;
    downwardDistanceK(node.left, k, result);
    downwardDistanceK(node.right, k, result)
}
function traversal(node, target, k, result) {
    if(!node) {
       return -1;
    }
   // console.log(node.val + "_" + target)
    if(node.val == target.val) {
        downwardDistanceK(node, k, result);
        return 0;
    }
    let leftDist =  traversal(node.left, target, k, result);
    if(leftDist != -1) {
       if(k == leftDist+1) {
          result.push(node.val);
           return -1;
        } else {
            // traversal(node.right, target, k-2, result);
            downwardDistanceK(node.right, k-leftDist-2, result);
            return leftDist+1;    
        }
        
    }
    let rightDist =  traversal(node.right, target, k, result);
    if(rightDist != -1) {
       if(k == rightDist+1) {
          result.push(node.val);
           return -1;
        } else {
            //traversal(node.left, target, k-2, result);
            downwardDistanceK(node.left, k-rightDist-2, result);
            return rightDist+1;    
        }
    }
    
    return -1;
}
var distanceK = function(root, target, k) {
    let result = [];
   traversal(root, target, k, result);
    return result;
    
};
//https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
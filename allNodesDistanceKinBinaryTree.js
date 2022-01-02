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
function travelsal(node, nodeLevelMap, dis, target, k) {
    if(!node) return;
    else {
        travelsal(node.left, nodeLevelMap, dis + 1, target,k);
        !nodeLevelMap.hasOwnProperty(node.val) && (nodeLevelMap[node.val] = dis);
        
        travelsal(node.right, nodeLevelMap, dis + 1, target,k);
    }
}
var distanceK = function(root, target, k) {
    let nodeLevelMap = {};
    travelsal(root, nodeLevelMap, 0, target, k);

    let targetNodeLevel = nodeLevelMap[target];
    let leveldownward = nodeLevelMap[target] + k;
    let levelupward = Math.abs(nodeLevelMap[target] - k);
    let ans = [];
    console.log(targetNodeLevel + ":" +levelupward )
    
    for(let node in nodeLevelMap) {
        if( node != target && ( nodeLevelMap[node] == leveldownward || nodeLevelMap[node] == levelupward ) ) {
            ans.push(node);
        }
    }
        return ans;
};
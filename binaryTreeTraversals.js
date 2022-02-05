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
 * @return {number[]}
 */
// Morris
 var inorderTraversal = function(root) {
    let current  = root, inorderArr = [];
    while(current != null){
          if(current.left != null) {
              let newPtr = current.left;
              while(newPtr.right != null && newPtr.right != current){
                    newPtr = newPtr.right;
                }
              if(newPtr.right == null) {
                  newPtr.right = current;
                  current = current.left;
              } else {
                  newPtr.right = null;
                  inorderArr.push(current.val);
                  current = current.right;
              }
          } else {
              inorderArr.push(current.val);
              current = current.right;
          }
    }
    return inorderArr;
}

/**
// Iterative 
function pushAllLeft(current, stack) {
    while(current != null){
        stack.push(current);
        current = current.left;
    }
}
var inorderTraversal = function(root) {
    let inorderArr = [];
    let current = root, stack = [];
    
    pushAllLeft(current, stack);
    while(stack.length){
        current = stack.pop();
        inorderArr.push(current.val);
        pushAllLeft(current.right, stack);
    }
    return inorderArr;
};
*/


/** 
// Recursive
function inOrder(pointer, arr) {
    if(!pointer) return;
    else {
        inOrder(pointer.left, arr);
        arr.push(pointer.val);
        inOrder(pointer.right, arr);
    }
}
var inorderTraversal = function(root) {
    let arr = [];
    inOrder(root, arr);
    return arr;
};

*/
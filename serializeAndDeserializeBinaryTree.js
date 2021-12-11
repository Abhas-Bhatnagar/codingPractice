function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
* Encodes a tree to a single string.
*
* @param {TreeNode} root
* @return {string}
*/
var serialize = function(root) {
  let processingArr = [];
  // base case 
  if(!root) return "";
  let outputArr = [];
  processingArr.push(root);
  
  while(processingArr.length) {
      let levelOrderArr = [];
      for(let itrNodes = 0; itrNodes < processingArr.length; itrNodes++) {
          let node = processingArr[itrNodes];
          if(!node) {
              outputArr.push("null");
              continue; // null node 
          }
          outputArr.push(node.val);
          if(node.left) {
              levelOrderArr.push(node.left);  
          } else levelOrderArr.push(null);  
          if(node.right) {
              levelOrderArr.push(node.right);   
          } else levelOrderArr.push(null);  
      }
      processingArr = levelOrderArr;
  }
  
  outputArr = outputArr.join(",").toString();
  console.log(outputArr)
  return outputArr;
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  let levelOrderArr = data.split(",");
  if(data.length == 0 ) return null;
  
  levelOrderArr = levelOrderArr.map((nodeVal)=>{ return (nodeVal == "null" ? "null" : new TreeNode(nodeVal)) ; });
  // levelOrderArr.length == 1
  let root = levelOrderArr[0];
  if(levelOrderArr.length == 1) {
      return root;
  }
  // console.log("deserialize"+levelOrderArr)
  // levelOrderArr.length >= 2
let childCounter = 1, parentIndex = 0;    
let newNode;
  
while(childCounter < levelOrderArr.length) {
  let pointer = levelOrderArr[parentIndex];
  let childNode = levelOrderArr[childCounter];
  
  if(pointer == "null") {
      parentIndex++;
      continue;
  }
  if(childNode == "null")  {
      pointer.left = null;
  } else {
      pointer.left = childNode;
  }
  childCounter++;
  if(childCounter >= levelOrderArr.length) {
      break;
  }
  
  childNode = levelOrderArr[childCounter];
  if(childNode == "null")  {
      pointer.right = null;
  } else {
      pointer.right = childNode;
  }
  childCounter++;
  if(childCounter >= levelOrderArr.length) {
      break;
  }
  //console.log(pointer)
  parentIndex++;
}    
  console.log( levelOrderArr[0])
  return levelOrderArr[0];
};

//https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
/**
test cases skewed tree
[0, null, 2, null, 4, null, 5]



[1,2,3,null,7,4,5, null, 8, null, null, null, 9]

 */
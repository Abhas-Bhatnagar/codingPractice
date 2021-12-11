function traversal(pointer, arr, horizontalDist, levelHeight){
    if(!pointer) return;
    else {
        if(!arr.hasOwnProperty(levelHeight)) {
            arr[levelHeight] = [horizontalDist, pointer.val];
        } 
        
        traversal(pointer.right, arr, horizontalDist+1, levelHeight+1);
        traversal(pointer.left, arr, horizontalDist-1, levelHeight+1);
        
        // else {
        //     let oldHDist = arr[levelHeight][0];
        //     if(horizontalDist >= oldHDist) {
        //         arr[levelHeight] = [horizontalDist, pointer.val];   
        //     }
        // }
    }

}
var rightSideView = function(root) {
    let horizontalDist = 0, levelHeight = 0;
    let treeArr = [root]
    let arr = [];
   // [
   //     [max -> horizontalDist , value]
   // ] 
    traversal(root, arr, horizontalDist, levelHeight);
    console.log(arr);
    arr = arr.map((innerArr)=>{return innerArr[1]});
    return arr;
};

// https://leetcode.com/problems/binary-tree-right-side-view/
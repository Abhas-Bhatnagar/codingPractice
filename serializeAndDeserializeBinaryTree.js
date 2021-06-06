// case 1
// ( 1 , 2 , 3 )

// case 2
// ( 1 , ( 2 , 1 , null ), 3)

function preOrder(node) {
    if(!node) {
        return null;
    }
    if(!node.left && !node.right) return node.val;
    return ("("+ node.val + " , " +  preOrder(node.left) + "," +   preOrder(node.right) + ")");
    
}
function convertIntoTree(str) {
    str = str.split(",").map((value)=>{ return value.trim();})
    
    if(str[0] == "null") return null;
    let parent = null;
    parent =  new TreeNode(str[0]);
    if(str.length == 1) {
        return parent;
    }
    parent.left =  new TreeNode(str[1]);
    parent.right = new TreeNode(str[2]);
        
    return parent;
}


class TreeNode {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}
 
var serialize = function(root) {  
    let str = preOrder(root);
    console.log(str)
    return str;
    
};

var deserialize = function(data) {
    
    let treeNode = convertIntoTree(data);
    console.log(treeNode);
    return treeNode;
};

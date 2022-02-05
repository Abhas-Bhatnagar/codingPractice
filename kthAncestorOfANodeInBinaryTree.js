function kthAncestor(ptr, hashMap, parentArr) {
    if (ptr == null) {
        return;
    }
    !hashMap.hasOwnProperty(ptr.data) && (hashMap[ptr.data] = []);
    hashMap[ptr.data].push(...parentArr);

    parentArr.push(ptr.data)
    kthAncestor(ptr.left , hashMap, parentArr);
    kthAncestor(ptr.right, hashMap, parentArr);
    parentArr.pop();
}

class binaryTree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

(function main() {
    let root = new binaryTree(1);
    let node2 = new binaryTree(2);
    let node3 = new binaryTree(3);
    let node4 = new binaryTree(4);
    let node5 = new binaryTree(5);
    root.left=node2;
    root.right=node3;
    node2.left=node4;
    node2.right=node5;

    let targetNode = 4, k = 2, hashMap = {};
    kthAncestor(root, hashMap, []);
    console.log(hashMap)

    let kthAncestorNode = -1;
    if(!hashMap.hasOwnProperty(targetNode)) {
        console.log(kthAncestorNode);
        return;
    }
    let parentArr = hashMap[targetNode];
    if (k >= 1 && k <= parentArr.length) {
        kthAncestorNode = parentArr[parentArr.length - k];
        console.log(kthAncestorNode);
        return;
    } else {
        console.log(kthAncestorNode);
        return;
    }
})();
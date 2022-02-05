/**
 * @param {number} capacity
 */
class Node{
    constructor(key, value) {
        this.next = null;
        this.prev = null;
        this.value = value;
        this.key = key;
    }
}
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.hashMap = {};
    this.currentSize = 0;
    this.head = new Node(-1,  -1);
    this.tail = new Node(-1,  -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};
LRUCache.prototype.add = function(node) {
    let leftNode = this.head;
    let rightNode = this.head.next;
    node.next = rightNode;
    node.prev = leftNode;
    leftNode.next = node;
    rightNode.prev = node;
}
LRUCache.prototype.delete = function(node) {
    let leftNode = node.prev;
    let rightNode = node.next;
    leftNode.next = rightNode;
    rightNode.prev = leftNode;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.hashMap.hasOwnProperty(key)) {
        let returnNode = this.hashMap[key];
        delete this.hashMap[key]; // remove element from hashmap
        this.delete(returnNode); // remove element from linklist
        let newNode = new Node(key, returnNode.value);
        this.add(newNode);
        this.hashMap[key] = newNode;
        return returnNode.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.hashMap.hasOwnProperty(key)) {
        this.delete(this.hashMap[key]);
        delete this.hashMap[key];
        this.currentSize--;
    } else if(this.currentSize >= this.capacity) {
       // remove element from tail
        let nodeToBeDeleted = this.tail.prev;
        delete this.hashMap[nodeToBeDeleted.key];
        this.delete(nodeToBeDeleted);
        this.currentSize--;
    }
    let newNode = new Node(key, value);
    this.add(newNode);
    this.hashMap[key] = newNode;
    this.currentSize++;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//https://leetcode.com/problems/lru-cache/
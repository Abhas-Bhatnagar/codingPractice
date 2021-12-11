class Solution
{
    //Function to return a list containing the bottom view of the given tree.
    traverse(pointer, hashMap, levelHeight, horizontalDist, minIndexArr) {
        if(!pointer || pointer.data == "N") return;
        else {
            minIndexArr[0] = Math.min(horizontalDist, minIndexArr[0]);
            minIndexArr[1] = Math.max(horizontalDist, minIndexArr[1]);
            
            if(!hashMap.hasOwnProperty(horizontalDist)) {
                hashMap[horizontalDist] = [ levelHeight , pointer.data];
               // console.log("horizontalDist"+horizontalDist+":"+hashMap[horizontalDist])
            } 
            else {
                let oldHeight = hashMap[horizontalDist][0];
                if(oldHeight <= levelHeight) {
                    hashMap[horizontalDist] = [ levelHeight , pointer.data];
                }
              //  console.log("horizontalDist"+horizontalDist+":seen"+hashMap[horizontalDist])
            }
            
            
            this.traverse(pointer.left, hashMap, levelHeight+1, horizontalDist-1, minIndexArr);
            this.traverse(pointer.right, hashMap, levelHeight+1, horizontalDist+1, minIndexArr);
        }
    }
    bottomView(root) {
        let hashMap = {};
        let minIndexArr = [Number.MAX_VALUE, Number.MIN_VALUE];
        this.traverse(root, hashMap, 0, 0, minIndexArr);
        
        let arr = [];
        for(let itr= minIndexArr[0]; itr<= minIndexArr[1] ; itr++) {
            if(hashMap.hasOwnProperty(itr)) {
                arr.push(hashMap[itr][1]);
            }
        }
        return arr;
    }
}
//https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1#
function delAsciiSum(s1, s2, index1, index2, hashMap) {
    let sum = 0;
    if(s1.length == index1) {
        for(let itr = index2; itr< s2.length; itr++ ) {
            sum += s2.charCodeAt(itr);
        }
        return sum;
    }
    if(s2.length == index2) {
        for(let itr = index1; itr< s1.length; itr++ ) {
            sum += s1.charCodeAt(itr);
        }
        return sum;
    }
    let key = index1 + "_" + index2;
    if(hashMap.hasOwnProperty(key)) {
        return hashMap[key];
    }
    if(s1[index1] == s2[index2]){
       hashMap[key] = delAsciiSum(s1, s2, index1+1, index2+1, hashMap);
        return hashMap[key];
    } else {
        let delOps1 = delAsciiSum(s1, s2, index1+1, index2, hashMap) + s1.charCodeAt(index1);
        let delOps2 = delAsciiSum(s1, s2, index1, index2 + 1, hashMap) + s2.charCodeAt(index2);
        
        hashMap[key] = Math.min(delOps1, delOps2);
        return hashMap[key];
    }
    
}
var minimumDeleteSum = function(s1, s2) {
    let hashMap = {};
    return delAsciiSum(s1, s2, 0, 0, hashMap);
};
//https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
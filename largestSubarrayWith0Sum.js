class Solution {
    maxLen(arr,n){
        //code here
        let prefixSum = 0 , maxSubArrLength = 0 ;
        let hashMap = {};
        for(let itr = 0; itr < n ; itr++) {
            let subArrLength = 0;
            prefixSum += arr[itr];
            if(prefixSum == 0) {
                subArrLength = itr + 1;
                maxSubArrLength = Math.max(maxSubArrLength, subArrLength);
                
            } else if(hashMap.hasOwnProperty(prefixSum)) {
                subArrLength = itr - hashMap[prefixSum];
                maxSubArrLength = Math.max(maxSubArrLength, subArrLength);
                console.log("subArrLength",subArrLength)
                console.log("hashMap",hashMap)
            }
            if(!hashMap.hasOwnProperty(prefixSum)) {
                hashMap[prefixSum] = itr;    
            }
        }
        return maxSubArrLength;
    }
}
let testCases = [
    {
        arr : [15,-2,2,-8,1,7,10,23],
        n : 8
    },
    {
        arr : [-1 ,1 ,-1, 1],
        n : 4
    }
]
let obj = new Solution();

console.log(obj.maxLen(testCases[0].arr , testCases[0].n));
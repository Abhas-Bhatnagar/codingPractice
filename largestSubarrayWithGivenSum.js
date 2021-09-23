class Solution {
    maxLen(arr, givenSum){
        //code here
        let prefixSum = 0 , maxSubArrLength = 0 ;
        let n = arr.length;
        let hashMap = {};
        for(let itr = 0; itr < n ; itr++) {
            let subArrLength = 0;
            prefixSum += arr[itr];
            console.log("prefixSum",prefixSum)
            if(prefixSum == givenSum) {
                subArrLength = itr + 1;
                maxSubArrLength = Math.max(maxSubArrLength, subArrLength);
                console.log("itr",itr)
                console.log("subArrLength",subArrLength)
                console.log("hashMap",hashMap)
            } else if(hashMap.hasOwnProperty(prefixSum - givenSum)) {
                subArrLength = itr - hashMap[prefixSum - givenSum];
                maxSubArrLength = Math.max(maxSubArrLength, subArrLength);
                console.log("itr",itr)
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
        arr : [10, 5, 2, 7, 1, 9],
        givenSum : 15
    },
    {
        arr : [15,-2,2,-8,3,7,8,23],
        givenSum : 10
    },
    // [15,  -2,  2 ,-8 , 3 , 7 , 8 , 23 ]
    // [15 , 13, 15 , 7 , 10, 17, 25 , 48 ]
    {
        arr : [15,-2,2,-8,1,7,10,23],
        givenSum : 0
    },
    {
        arr : [-1 ,1 ,-1, 1],
        givenSum : 4
    }
]
let obj = new Solution();

console.log(obj.maxLen(testCases[0].arr , testCases[0].givenSum));
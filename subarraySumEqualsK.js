/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// {
//     1 : 1,
//     2 : 1,
//     3 : 1
// }
// {
//     1 : 1,
//     3 : 2,
//     6 : 1,
    
// }
//test case 3 [1, 2, 3, -3]

var subarraySum = function(nums, k) {
    let totalSubArrCounter = 0;
    
    let hashMap = {}, prefixSum = 0;
    for(let itr =0 ; itr < nums.length ; itr++) {
        prefixSum += nums[itr];
        
        
        if(prefixSum == k) {
            totalSubArrCounter += 1;
        }
        if(hashMap.hasOwnProperty(prefixSum - k )) {
            totalSubArrCounter += hashMap[prefixSum - k]
        }
        
        !hashMap.hasOwnProperty(prefixSum) && (hashMap[prefixSum] = 0);
        hashMap[prefixSum] += 1;
    }
    return totalSubArrCounter;
};

// https://leetcode.com/problems/subarray-sum-equals-k/submissions/
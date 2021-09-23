/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// [5 , 6 , 12, 2]
// [5, 11, 23 , 25]
// [5, 5, 5, 1]

[23, 25, 29, 35, 41]
[2,  4,  1,  0,  6]
var checkSubarraySum = function(nums, k) {
   
   let modkHashMap = {}, prefixSum = 0;
   
   for(let itr = 0 ; itr < nums.length; itr++) {
       prefixSum += nums[itr];
       
       let modKSum = prefixSum%k;
       if (modKSum == 0 && itr >= 1) { // edge case for subarray starting from 0 index having sum divisible by k & length >= 2
            return true;
        }

        if(!modkHashMap.hasOwnProperty(modKSum)) {
            modkHashMap[modKSum] = itr;   
        } else {
            if(itr - modkHashMap[modKSum] >= 2) {
                return true;
            }
        }
   }
   return false;
};

//https://leetcode.com/problems/continuous-subarray-sum/
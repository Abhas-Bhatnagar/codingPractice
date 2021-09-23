function subsetSum(arr , itr , sum, hashmap) {
    // console.log(itr + "_"+  sum)
    if (sum == 0 || arr[itr] == sum) {
        return true;       
    }
    if (itr == arr.length || sum < 0) {
        return false;
    }
    if (hashmap.hasOwnProperty(itr+"_"+sum)) {
        return hashmap[itr+"_"+sum];
    }
    hashmap[itr+"_"+sum] = subsetSum(arr, itr+1 , sum, hashmap) || subsetSum(arr , itr+1 , sum - arr[itr] , hashmap);
    
    return hashmap[itr+"_"+sum];
}
var canPartition = function(nums) {
    let hashmap = {};

    let sum = 0;
    for (let itr = 0; itr < nums.length; itr++) {
        sum += nums[itr];
    }
    if (sum % 2 != 0 ) {
        return false;
    }
    let target = sum / 2;

    return subsetSum(nums, 0 , target, hashmap);
};

console.log(canPartition([14,9,8,4,3,2]))

// console.log(canPartition([23,8,4,3,2]))
//https://leetcode.com/problems/partition-equal-subset-sum/
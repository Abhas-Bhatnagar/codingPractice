/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumberOfLIS = function(nums) {
    let lisArr = [], maxLIS = 1, numOfLongIncSub = 1, longIncSubArr = [];
    lisArr[nums.length-1] = 1;
    for(let itr = nums.length-2; itr >= 0; itr--) {
        lisArr[itr] = 1;
        longIncSubArr[itr] =0;
        let exeFlag = false;
        for(let innerItr = itr+1; innerItr < nums.length; innerItr++) {
            if(nums[itr] < nums[innerItr]) {
                let currentNum = lisArr[itr];
                if(currentNum < lisArr[innerItr]) {
                    lisArr[itr] = lisArr[innerItr];
                    
                }
                longIncSubArr[itr]++;
                exeFlag = true;
            }
        }
        if(exeFlag) {
            lisArr[itr]++;
            if( maxLIS < lisArr[itr] ) {
                maxLIS = lisArr[itr];
                longIncSubArr[itr]
            } else if (maxLIS == lisArr[itr]) {
                numOfLongIncSub++;
            }
        }        
    }
    return numOfLongIncSub;
};


//https://leetcode.com/problems/number-of-longest-increasing-subsequence/
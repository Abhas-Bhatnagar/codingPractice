var splitArray = function(nums, m) {
    if (!nums.length) {
        return -1;
    }
    if (nums.length < m) {
        return -1;
    }
    let start, end, sum = 0 , max = nums[0];

    for (let itr = 0; itr < nums.length; itr++) {
        sum += nums[itr];
        max = Math.max(max, nums[itr]);
    }
    start = max;
    end = sum;
    let flag = false, lastIndex = -1, previousFlag = false;
    while(start <= end){
        let mid = Math.floor((start + end) /2);

        if(mid - 1 >= start){
            previousFlag = isSplitArrayPossibleWithGivenThreshold(nums, mid-1, m);
        } else {
            previousFlag = false;
        }
        flag = isSplitArrayPossibleWithGivenThreshold(nums, mid, m);

        if (flag) {
            end = mid;
            lastIndex = mid;

            if (flag && !previousFlag) {
                return lastIndex;
            }
        } else {
            start = mid + 1;
        }
    }
    if (flag) {
        return lastIndex;
    } else {
        return -1
    }

};

/**
 * 
 * @param {*} arr        : [7,2,5,10,8] : sorted or not sorted
 * @param {*} threshold  : [ maxElementOfArr , sumOfAllElements ]
 * @param {*} splitSize  : [ maximumNumOfSplits , leastNumberOfSplit == 1] : even split is possible or not
 */

function isSplitArrayPossibleWithGivenThreshold(arr, threshold, splitSize) {
    
    let sum = threshold , splitCount = 1;
    for (let itr = 0; itr < arr.length; itr++) {
        let element =  arr[itr];

        if(sum >= element) {
            sum -= element;
        } else {
            sum = threshold;
            sum -= element;
            // case : if threshold always >= maxElementOfArr then go ahead else false
            if (sum < 0) {
                return false;
            }
            splitCount++;
        }
        // case : while splitting if we exceeds splitCount then false
        if (splitCount > splitSize) {
            return false;
        }
    }
    // case : while splitting if splitCount != splitSize then false;
    if(splitCount != splitSize) {
        return false;
    } 
    return true;
    
}
let testCases = [
    {
        arr : [7,2,5,10,8],
        splitSize : 2,
        threshold : 19
    }
]

for (let itr = 9; itr < 33; itr++) {
    let arr = testCases[0].arr;
    let splitSize = testCases[0].splitSize;
    let threshold = itr;
    console.log("itr" + itr + " testCases " + isSplitArrayPossibleWithGivenThreshold(arr, threshold, splitSize));
    
}
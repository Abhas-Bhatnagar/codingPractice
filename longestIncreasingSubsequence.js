/**
 * @param {number[]} nums
 * @return {number}
 */
// 10, 15, 20, 25, 30, 40 -> index = 2
// 10, 15, 20, 20, 30, 40 -> index = 2
// 10, 15, 22, 25, 30, 40 -> index = 2
function lower_bound(arr, start, end, target) {
    
    while(start < end){
        let mid = Math.floor((start + end)/2);
        
        if(target == arr[mid]) {
            end = mid;
        } else if (target < arr[mid]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    while(start < arr.length && arr[start] < target) {
          start++;
    }
    return start;
}
var lengthOfLIS = function(nums) {
    let lisArr = [];
    for(let itr = 0; itr < nums.length; itr++) {
        
        if(itr == 0 || lisArr[lisArr.length-1] < nums[itr] ) {
           lisArr.push(nums[itr]);
        } else {
            let lowerBoundIndex = lower_bound(lisArr, 0, lisArr.length, nums[itr]);
            lisArr[lowerBoundIndex] = nums[itr];
        }
    }
    return lisArr.length;
};
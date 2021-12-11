/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function rearrange(arr, firstIndex, secondIndex, result ) {
    if(firstIndex  == arr.length-1){
        result.push(arr);
        return;
    }
    let tempArr = [...arr];
    tempArr[firstIndex] = tempArr[secondIndex];
    tempArr[secondIndex] = arr[firstIndex];
     for(let itr = firstIndex+1 ; itr < arr.length ; itr++) {
        rearrange(tempArr, firstIndex + 1, itr, result);
    }
}
var permute = function(nums) {
    let result = []; 
    for(let itr = 0 ; itr < nums.length ; itr++) {
        rearrange(nums, 0, itr, result);
    }
    return result;
};
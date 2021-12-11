/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function rearrange(arr, firstIndex, secondIndex, result ) {
    if(firstIndex  == arr.length-1){
        result.push([...arr]);
        return;
    }
    let hashMap = {};
    
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
    
     for(let itr = firstIndex+1 ; itr < arr.length ; itr++) {
         if(!hashMap.hasOwnProperty(arr[itr])) {
              rearrange(arr, firstIndex + 1, itr, result);
             hashMap[arr[itr]] = 1;
         }
          
    }
    
    temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}
var permuteUnique = function(nums) {
    let result = []; 
//nums.sort((a,b)=>{return a-b;})
    let hashMap = {};

    for(let itr = 0 ; itr < nums.length ; itr++) {
        if(!hashMap.hasOwnProperty(nums[itr])) {

        rearrange(nums, 0, itr, result);
             hashMap[nums[itr]] = 1;
         }
          
    }
    return result;
};
//https://leetcode.com/problems/permutations-ii/
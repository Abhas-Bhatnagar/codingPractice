function subsetSumNumOfWays(arr, currentItr , sum, visited) {
    
    let target = sum - arr[currentItr];
    if(target == 0) return 1;
    if(target < 0) return 0;
    
    for(let itr =0 ; itr < arr.length ; itr++) {
        if(visited[itr] == 0 && itr != currentItr){
           visited[itr] = 1;
           let ways = subsetSumNumOfWays(arr, itr, target, visited);
           if(ways == 0 ) visited[itr] = 0;
           else return 1;
        }
    }
    return 0
}
var canPartitionKSubsets = function(nums, k) {
    let sum = 0, visited = [];
    for (let itr = 0; itr < nums.length; itr++) {
        sum += nums[itr];
        visited.push(0);
    }    
    if(sum % k != 0 ) {
        return false;
    }
    let target = sum / k ;
    let numOfWays = 0;
    
    for(let itr =nums.length-1 ; itr >=0 ; itr--) {
        if(visited[itr] == 0) {
            visited[itr] = 1;
            let ways = subsetSumNumOfWays(nums, itr, target, visited);
            if(ways == 0 ) visited[itr] = 0;
            numOfWays += ways;
        }
    }
    
    console.log("sum "+sum)
    console.log("target "+target)
    console.log("numOfWays "+numOfWays)
    console.log("visited "+visited)
    
    if (numOfWays >= k) {
        return true;
    } else {
        return false;
    }
};
console.log(canPartitionKSubsets([4,3,2,3,5,2,1] , 4 ))

// test case 2
// [114,96,18,190,207,111,73,471,99,20,1037,700,295,101,39,649] , 4
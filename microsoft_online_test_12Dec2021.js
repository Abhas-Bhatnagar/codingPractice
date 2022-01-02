// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function minCost(arr, index, X, Y, sum, hashMap) {
    // base cases
    if(sum <= 0) return 0; // adding <= because even if we generate more energy than required with min. cost it will be fine
    if(index >= arr.length) return Infinity;

    // using hashMap to re-use existing computed solution
    let hashKey = index + "_" + sum;
    if(hashMap.hasOwnProperty(hashKey)) {
        return hashMap[hashKey];
    }

    let noPlantInstCost = minCost(arr, index+1, X, Y, sum, hashMap);
    let xPlantInstCost = minCost(arr, index+1, X, Y, sum - arr[index] , hashMap) + X;
    let yPlantInstCost = minCost(arr, index+1, X, Y, sum - (2 * arr[index]) , hashMap) + Y;

    let cost = Math.min(noPlantInstCost, xPlantInstCost, yPlantInstCost);
    hashMap[hashKey] = cost;
    return hashMap[hashKey];
}

function solution(arr, X, Y) {
    let hashMap = {}, sum = 0 ;
    for(let itr = 0 ; itr < arr.length; itr++) {
        sum += arr[itr];
    }
    let cost =  minCost(arr, 0, X, Y, sum, hashMap);
    //console.log(cost);

    // top down approach
    // Time complexity: O(arr.length * sum)
    // Space complexity: O(arr.length * sum) for hashMap 
    //                  excluding recursive funcation's call
    return cost;
}

var timeComplexity = 0, hashMap = {};

function minimumNumOfHops(arr , currentIndex) {
    
    if(hashMap.hasOwnProperty(currentIndex)) return hashMap[currentIndex];

    // base case 
    if (currentIndex == arr.length - 1) {
        // return 0;
        return chache(0, currentIndex);
    }
    if (currentIndex >= arr.length) {
        // return (arr.length +1);
        return chache((arr.length +1) , currentIndex );
    }
    timeComplexity++;

    let min = arr.length +  1;
    let currentValue = arr[currentIndex];


    for (let itr = currentIndex + 1 ; (itr < arr.length) && (itr < currentIndex + 1 + currentValue); itr++) {
        min = Math.min(min , minimumNumOfHops(arr , itr) );
    }
    // return (min + 1);
    return chache((min + 1) ,  currentIndex );
}

function chache(num, currentIndex) {
    !hashMap.hasOwnProperty(currentIndex) && (hashMap[currentIndex] = num);
    return hashMap[currentIndex];
}

function main(arr) {
    timeComplexity = 0;
    hashMap = {};

    let hopsValue = minimumNumOfHops(arr , 0);

    if (hopsValue >= arr.length) {
        return -1;
    } else {
        return hopsValue;
    }
}

let testCases = [
    [2,3,1,1,4],
    [2,3,0,1,4],
    [5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5]
 ];

//console.log("minimumNumOfHops" + minimumNumOfHops(testCases[1] , 0));

for (let itr = 0; itr < testCases.length; itr++) {
    console.log("test cases : " +  (itr + 1))
    console.log(main(testCases[itr]));
    console.log("time complexity " + timeComplexity)
    console.log("------------------")   
}

// Time Complexity: O(N)
// space complexity: O(N)


// https://leetcode.com/problems/jump-game-ii/
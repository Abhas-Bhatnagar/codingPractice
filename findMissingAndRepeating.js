function checkSetBit(num , k) {
    return num & (  1 << (k-1));
}
function findTwoElements(arr) {
    let xor_of_given_arr = arr[0], xor_upto_arr_length = 1;
    for (let itr = 1; itr < arr.length; itr++) {
        xor_of_given_arr ^= arr[itr];       
    }
    for (let itr = 2; itr <= arr.length; itr++) {
        xor_upto_arr_length ^= itr;       
    }
    let setBitNumber = xor_of_given_arr ^ xor_upto_arr_length;
    setBitNumber  = setBitNumber & ~( setBitNumber - 1); // set right most bit 
    let bucket1 = 0, bucket2 = 0;

    for (let itr = 0; itr < arr.length; itr++) {
        if (setBitNumber & arr[itr]) {
            bucket1 ^= arr[itr];
        } else {
            bucket2 ^= arr[itr];
        }
        if (setBitNumber & (itr+1)) {
            bucket1 ^= (itr+1);
        } else {
            bucket2 ^= (itr+1);
        }
    }
    let repeatNumberCounter = 0 , missingNumberCounter = 0;
    for (let itr = 0; itr < arr.length; itr++) {
        if (bucket1 == arr[itr]) {
            repeatNumberCounter++;  
        } 
        if (bucket2 == arr[itr]) {
            missingNumberCounter++;
        }
    }
    if (repeatNumberCounter == 2 && missingNumberCounter == 0) {
        return {
            "repeatNumber" : bucket1,
            "missingNumber" : bucket2
        };
    } else {
        return {
            "repeatNumber" : bucket2,
            "missingNumber" : bucket1
        };
    }

}





let testCases = [
    [1, 3, 3],
    [2, 2],
    [1],
//    [2] //invalid test case
];

for (let itr = 0; itr < testCases.length; itr++) {
    console.log("testcase "+  testCases[itr] + " output " + JSON.stringify(findTwoElements(testCases[itr]), 4));
}


// Repeat and Missing Number 
// https://www.youtube.com/watch?v=5nMGY4VUoRY&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=4

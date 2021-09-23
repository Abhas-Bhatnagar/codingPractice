let arr1 = [1, 5, 9, 10, 15, 20];
let arr2 = [2, 3, 8, 13];

//----------------------------------------------------------------------------------------------------------------------
/**
 
if(arr1[pointer1] < arr2[pointer2]) {
    pointer1++;
} else {
    swap(arr1[pointer1] , arr2[pointer2]);
}

 */
// step 1
// pointer1 = 0 , pointer2 = 0 
// arr1 = [1, 5, 9, 10, 15, 20];
// arr2 = [2, 3, 8, 13];

// pointer1 = 1

// // step 2
// pointer1 = 1 , pointer2 = 0 
// arr1 = [1, 5, 9, 10, 15, 20];
// arr2 = [2, 3, 8, 13];


// arr1 = [1, 2, 9, 10, 15, 20];
// arr2 = [5, 3, 8, 13];
function swap(arr1 , arr2 , itr1 , itr2) {
    let temp = arr1[itr1];
    arr1[itr1]  = arr2[itr2];
    arr2[itr2] = temp;
}
//[5, 2, 6, 7, 8]
//[ 7, 5, 6, 8, 9 ]
function rearrange(arr2 , index) {
    for (let itr = 1; itr < arr2.length; itr++) {
        if(arr2[index] > arr2[itr]) {
            swap(arr2, arr2, index , itr);
            index++;
        }
        
    }
}

function mergeSortedArr(arr1, arr2) {

    for (let itr = 0; itr < arr1.length; itr++) {
        if (arr1[itr] <= arr2[0]) {
            
        } else {
            swap(arr1 , arr2 , itr , 0);
            rearrange(arr2);
        }
    }
}



//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
/**
 time complexity : O(N)
 space complexity : O(N)
 */

function mergeWithExtraSpace(arr1 , arr2) {
    let pointer1 = 0 , pointer2 = 0;
    let arr = [];
    for (let itr = 0; itr < (arr1.length + arr2.length) ; itr++) {
        if (arr1[pointer1] <= arr2[pointer2] && pointer1 < arr1.length) {
            arr.push(arr1[pointer1++]);
        } else if(arr1[pointer1] > arr2[pointer2] && pointer2 > arr2.length){
            arr.push(arr2[pointer2++]);
        }
    }
    for (let itr = pointer1; itr < arr1.length; itr++) {
        arr.push(arr1[itr]);
    }
    for (let itr = pointer2; itr < arr2.length; itr++) {
        arr.push(arr2[itr]);
    }

    let index = 0;
    for (let itr = 0; itr < (arr1.length) ; itr++) {
        arr1[itr] = arr[index++];
    }
    for (let itr = 0; itr < (arr2.length) ; itr++) {
        arr2[itr] = arr[index++];
    }
}
console.log(mergeWithExtraSpace())
//----------------------------------------------------------------------------------------------------------------------




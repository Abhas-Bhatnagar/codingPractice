function findPivotIndex(arr, left , right){
    // [3, 4, 5, 6, 1, 2] -> 3
    // [1, 2] -> -1
    // [5, 4 , 3] -> -1
    // [4,5,1,2,3] -> 
    if (left > right) {
        return -1;
    }
    if (left == right) {
        return left;
    }
    let mid = Math.floor((left+right)/2);
    if ( mid < right && arr[mid] > arr[mid+1]) {
        return mid;
    }
    if ( mid > left && arr[mid] < arr[mid- 1]) {
        return mid-1;
    }
    if (arr[left] >= arr[mid]) {
        return findPivotIndex(arr, left , mid-1);
    } else {
        return findPivotIndex(arr, mid+1 , right);
    }



    
}
function binarySearch(arr, target , start , end) {
    while(start <= end) {
        let mid = Math.floor((start + end )/2);
        if (arr[mid] == target) {
            return mid;
        }
        if (target > arr[mid] ) {
            start = mid +1;
        } else {
            end = mid -1;
        }
    }
    return -1 ;
}
var search = function(nums, target) {
    let pivot = findPivotIndex(nums, 0 , nums.length-1);
    console.log("pivot"+pivot)
    if (pivot == -1) {
        return -1;
    }
    
    if (nums[pivot] == target) {
        return pivot;
    }

    let leftPart = binarySearch(nums, target ,  0 , pivot -1);
    if (leftPart != -1) {
        return leftPart;
    }
    let rightPart = binarySearch(nums, target , pivot+1 , nums.length -1);
    if (rightPart != -1) {
        return rightPart;
    }
    return -1;
    
};


let inputArr;
inputArr = [6, 7, 8, 1 , 2, 3, 4, 5 ];
// inputArr = [1, 2, 3, 4, 5, 6]
// inputArr = [8 , 7 , 6 , 5, 4 , 3] 
inputArr = [4,5,1,2,3]
console.log(search(inputArr,1))
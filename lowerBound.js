function upper_bound(arr, X) {
    let mid;
    let low = 0;
    let high = arr.length;
 
    while (low < high) {
        mid = Math.floor((high + low) / 2);

        if (X == arr[mid]) {
            low = mid + 1;
        } else if (X < arr[mid]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    if(low < arr.length && arr[low] <= X) {
       low++;
    }
    return low;
}
function upperBound(arr, target){
    // rightmost case
    if(target > arr[arr.length-1]) return arr.length;
    
    let low = 0, high = arr.length-1, index;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] == target){
            low = mid + 1;
            index = mid + 1;
        } else if (arr[mid] > target) {
             high = mid -1; 
            index = mid;
        } else {
            low = mid +1;
        }
    }
    return index;
}

function lower_bound(arr, X) {
    let mid;
    let low = 0;
    let high = arr.length;
 
    while (low < high) {
        mid = Math.floor((high + low) / 2);
        if (X == arr[mid]) {
            high = mid;
        } else if (X < arr[mid]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    if(low < arr.length && arr[low] < X) {
       low++;
    }
    return low;
}
function lowerBound(arr, target){
    // rightMost case
    if(target > arr[arr.length-1]) return arr.length;
    
    let low = 0, high = arr.length-1;
    let index;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] == target){
            index = mid;
            high = mid - 1;
        } else if (arr[mid] > target) {
            index = mid;
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return index;
}

var searchRange = function(nums, target) {
    debugger
    let lower_boundVar = lower_bound(nums, target);
    let lowerBoundVar = lowerBound(nums, target);

    let upper_boundVar = upper_bound(nums, target);
    let upperBoundVar = upperBound(nums, target);

    return [
        upper_boundVar,upperBoundVar
    ]
};
let testCase = [
    {
        arr : [ 1, 2, 4, 4, 7, 10 ],
        target :  5
    },
    {
        arr : [5,7,7,8,8,10],
        target :  6
    },
    {
        arr : [5,7,7,8,8,10],
        target : 11
    }
]

console.log(searchRange(testCase[0].arr , testCase[0].target))

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
var searchRange = function(nums, target) {
    debugger
    let lower_boundVar = lower_bound(nums, target);
    let upper_boundVar = upper_bound(nums, target);

    return [
        lower_boundVar,upper_boundVar
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
        target : 8
    }
]

console.log(searchRange(testCase[0].arr , testCase[0].target))

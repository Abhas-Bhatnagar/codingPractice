// [10,13, 9] //n1
// [ 2, 7, 9] //n2

// diffArr
// [ 8, 6, 0] // abs(n1[itr] - n2[itr])
// minDiffArr
// [ 7, 2, 0] // abs(n1.lowerBound(n2[itr]) - n2[itr])

// [ 1, 4, 0] // abs(diffArr[itr] - minDiffArr[itr])

function lowerBound(arr, X) {
  let mid;
  let low = 0;
  let high = arr.length-1;;

  while (low < high) {
      mid = Math.floor((high + low) / 2);
      if (X <= arr[mid]) {
          high = mid;
      } else {
          low = mid + 1;
      }
  }
  if(low < arr.length-1 && arr[low] < X) {
      low++;
  }
  return low;
}

function minDiffLowerBoundIndex(arr, lower_bound, target) {
  // lower_bound_1// [0, arr.length -1] = lower_bound
  // lower_bound_2// [0, arr.length -1] = lower_bound <= 1 ? 0 : lower_bound-1
  let lower_bound_1 = lower_bound;
  let lower_bound_2 = lower_bound <= 1 ? 0 : lower_bound-1;

  if(Math.abs(arr[lower_bound_1] - target) > Math.abs(arr[lower_bound_2] - target)){
    return lower_bound_2;
  } else {
    return lower_bound_1;
  }
}

var minAbsoluteSumDiff = function(nums1, nums2) {
  
    let nums1_sorted = [...nums1];
    nums1_sorted.sort(function (a, b) { return a-b;});

    let sum = 0, maxDeltaDiff = 0;
    for (let itr = 0; itr < nums1.length; itr++) {
        let diff = Math.abs(nums1[itr] - nums2[itr]);
        sum += diff;

        let lower_bound = lowerBound(nums1_sorted, nums2[itr]);
        lower_bound = minDiffLowerBoundIndex(nums1_sorted, lower_bound, nums2[itr]);
        lower_bound = nums1_sorted[lower_bound];
      
        let minDiff = Math.abs(lower_bound - nums2[itr]);
        let deltaDiff = diff - minDiff;
        if(maxDeltaDiff < deltaDiff) {
            maxDeltaDiff = deltaDiff;
        }
        
        // console.log("itr"+itr)
        // console.log("nums2[itr]"+nums2[itr])
        // console.log("lower_bound"+lower_bound)
        // console.log("diff"+diff)
        // console.log("minDiff"+minDiff)
        // console.log("deltaDiff"+deltaDiff)   
    }
    console.log("sum"+sum)
    console.log("maxDeltaDiff"+maxDeltaDiff)
    return (sum - maxDeltaDiff) % (10e8+7);
};



  //console.log(minAbsoluteSumDiff([10,13, 9], [ 2, 7, 9]))


  //console.log(minAbsoluteSumDiff([2,4,6,8,10], [2,4,6,8,10]))

  console.log(minAbsoluteSumDiff([1,10,4,4,2,7], [9,3,5,1,7,4]))

// let arr1 = [53,48,14,71,31,55,6,80,28,19,15,40,7,21,69,15,5,42,86,15,11,54,44,62,9,100,2,26,81,87,87,18,45,29,46,100,20,87,49,86,14,74,74,52,52,60,8,25,21,96,7,90,91,42,32,34,55,20,66,36,64,67,44,51,4,46,25,57,84,23,10,84,99,33,51,28,59,88,50,41,59,69,59,65,78,50,78,50,39,91,44,78,90,83,55,5,74,96,77,46]
// let arr2 = [39,49,64,34,80,26,44,3,92,46,27,88,73,55,66,10,4,72,19,37,40,49,40,58,82,32,36,91,62,21,68,65,66,55,44,24,78,56,12,79,38,53,36,90,40,73,92,14,73,89,28,53,52,46,84,47,51,31,53,22,24,14,83,75,97,87,66,42,45,98,29,82,41,36,57,95,100,2,71,34,43,50,66,52,6,43,94,71,93,61,28,84,7,79,23,48,39,27,48,79]
// console.log(minAbsoluteSumDiff(arr1, arr2))


// let arr1 = [1,7,5]
// let arr2 = [2,3,5]
// console.log(minAbsoluteSumDiff(arr1, arr2))
// 3

// https://leetcode.com/problems/minimum-absolute-sum-difference/submissions/
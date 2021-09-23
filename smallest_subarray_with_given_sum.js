const smallest_subarray_with_given_sum = function(s, arr) {
  let sum = 0, minLen = arr.length+1 , lPointer = 0, rPointer = -1;

  while(rPointer < arr.length - 1) {

    while(rPointer < arr.length -1) {
      rPointer += 1;
      sum += arr[rPointer];
      if(sum >= s) {
        minLen = Math.min(minLen, rPointer - lPointer + 1);
        break;
      }
    }

    while(lPointer < rPointer){
      sum -= arr[lPointer];
      lPointer += 1;
      if(sum < s) {
        break;
      }     
      minLen = Math.min(minLen, rPointer - lPointer + 1);
    }

  }
  return minLen == arr.length + 1 ? -1 : minLen;
};

//console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]))
console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]))
console.log(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6]))
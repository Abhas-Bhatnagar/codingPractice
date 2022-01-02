class Solution {
    maxSumIS(arr,n){
        //code here
        let maxSumArr = [];
        for(let itr =0; itr < arr.length; itr++) {
            maxSumArr.push(arr[itr]);
        }
        let maxSum = 0;
        // maxSumArr[arr.length-1] = arr[arr.length-1];
        for(let itr = arr.length -1; itr >= 0; itr--) {
            let currentEle = arr[itr], maxEle = 0;
            for(let itrLeftToRight = itr+1; itrLeftToRight <= arr.length-1; itrLeftToRight++) {
                // assuming strict inc.
                if(currentEle < arr[itrLeftToRight]) {
                    maxEle = Math.max(maxEle, maxSumArr[itrLeftToRight]);
                }
            }
            maxSumArr[itr]+= maxEle;
            maxSum = Math.max(maxSum, maxSumArr[itr]);
        }
        return maxSum;
    }
}
//https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1#
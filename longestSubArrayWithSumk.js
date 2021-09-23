class Solution{
    lenOfLongSubarr(arr,n, k){
        // prefixSum in hashMap
        let hashMap = {}, prefixSum, maxLength = 0;
        for(let itr = 0 ; itr < arr.length; itr++) {
            if(itr == 0) { prefixSum = arr[itr] }
            else { prefixSum += arr[itr]; }
            !hashMap[prefixSum] && (hashMap[prefixSum] = itr);
            
            if(prefixSum == k) {
                maxLength = Math.max(maxLength, itr+1);
            } 
            // k = prefix sum at itr - prefix sum at any previous index
            // prefix sum at any previous index = prefix sum at itr - k
            if(hashMap.hasOwnProperty(prefixSum - k)) {
                let subArrlength = itr - hashMap[prefixSum - k];
                maxLength = Math.max(maxLength, subArrlength);
            }
        }
        return maxLength;
    }
}




//https://www.geeksforgeeks.org/longest-sub-array-sum-k/
/**
 class Solution{
    subsetSumMaxPath(arr, itr, sum, length, maxLenArr) {
        //console.log(itr, sum, length, maxLenArr)
        // base cases
        if(sum < 0 || itr >= arr.length) return;
        
        if(sum == 0) {
            maxLenArr[0] = Math.max(maxLenArr[0], length);
        }
        
        this.subsetSumMaxPath(arr, itr+1, sum, length, maxLenArr);
        this.subsetSumMaxPath(arr, itr+1, sum - arr[itr], length+1, maxLenArr);

    }
    lenOfLongSubarr(arr,n, k){
        //code here
        let maxLenArr = [0];
        this.subsetSumMaxPath(arr, 0, k, 0, maxLenArr);
        return maxLenArr[0];
    }
}
 */
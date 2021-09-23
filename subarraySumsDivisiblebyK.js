class Solution {
    maxLen(arr, divisor){
        //code here
        let prefixSum = 0 , counter = 0 ;
        let n = arr.length;
        let hashMap = {};
        for(let itr = 0; itr < n ; itr++) {
            //let count = 0;
            prefixSum += arr[itr];
            let reminder = prefixSum % divisor;
            let negReminder = divisor - reminder;

            console.log("prefixSum",prefixSum)
            if (reminder == 0) {
                counter += 1;
            } else if (hashMap.hasOwnProperty(negReminder)) {
                counter += hashMap[negReminder];
            }
            // if(prefixSum == givenSum) {
            //     subArrLength = itr + 1;
            //     maxSubArrLength = Math.max(maxSubArrLength, subArrLength);
            //     console.log("itr",itr)
            //     console.log("subArrLength",subArrLength)
            //     console.log("hashMap",hashMap)
            // } else if(hashMap.hasOwnProperty(prefixSum - givenSum)) {
            //     subArrLength = itr - hashMap[prefixSum - givenSum];
            //     maxSubArrLength = Math.max(maxSubArrLength, subArrLength);
            //     console.log("itr",itr)
            //     console.log("subArrLength",subArrLength)
            //     console.log("hashMap",hashMap)
            // }

            hashMap[reminder] = !hashMap.hasOwnProperty(reminder) ? 1 : hashMap[reminder]+1;
            
        }
        return maxSubArrLength;
    }
}
// case  1
4
prefixSum 4
reminder 4 , negReminder 1
counter 0
hashMap { 4 : 1 }
// case 2
prefixSum 9
reminder 4 , negReminder 1
counter 0
hashMap { 4 : 2 }
//case 3
prefixSum 9
reminder 4 , negReminder 1
counter 0
hashMap { 4 : 3 }
// case 4
prefixSum 7
reminder 2 , negReminder 3
counter 0
hashMap { 4 : 2 , 2 : 1}
// case 5
prefixSum 4
reminder 4 , negReminder 1
counter 0
hashMap { 4 : 2 }


let testCases = [
    {
        arr : [4,5,0,-2,-3,1],
        divisor : 5
    }
]
let obj = new Solution();

console.log(obj.maxLen(testCases[0].arr , testCases[0].divisor));
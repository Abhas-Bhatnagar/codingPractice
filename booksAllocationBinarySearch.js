// { Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let a = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            a[i] = input_ar1[i];
        let m = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.findPages(a, n, m));
        
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

class Solution
{
    isAllocationPossible(arr, maxPagesThreshold, studentsCount) {
        let sum = 0, counter = 1;
        for(let itr = 0; itr < arr.length; itr++) {
            if(sum + arr[itr] > maxPagesThreshold) {
                sum = arr[itr];
                counter++;
            } else {
                sum += arr[itr];    
            }
            if(counter > studentsCount) {
                return 1;
            }
        }
        if(counter == studentsCount) {
            return 0;
        } else if (counter > studentsCount) {
            return 1;
        } else {
            return -1;
        }
    }
    //Function to find minimum number of pages.
    findPages(arr, booksCount, studentsCount){
        if(studentsCount > arr.length) return -1;
        let lowerLimit = arr[0];
        let upperLimit = 0;
        for(let itr= 0; itr < arr.length; itr++) {
            upperLimit += arr[itr];
            lowerLimit = Math.max(lowerLimit, arr[itr]);
        }
        //console.log(lowerLimit+"_"+upperLimit)
        // [90, 247]
        
        let maxPages = -1;
        while(lowerLimit <= upperLimit) {
            let mid = Math.floor((upperLimit + lowerLimit) / 2);
// console.log("mid"+mid)
            let allocationFlags = this.isAllocationPossible(arr, mid, studentsCount); 
// console.log("allocationFlags"+allocationFlags)
            if(allocationFlags == 0 || allocationFlags == -1) {
                maxPages = mid;
                upperLimit = mid - 1;
            } else if(allocationFlags == 1) {
                lowerLimit = mid + 1;
            } 
        }
        return maxPages;
    }
}
//https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1/
//https://leetcode.com/problems/split-array-largest-sum/
//https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/submissions/
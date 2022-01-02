class Solution 
{
    //Function to find the maximum profit and the number of jobs done.
    JobScheduling(jobs, n)
    {
        jobs.sort((a,b)=>{return b.profit - a.profit;});

        let maxJobDeadline = jobs[0].dead;
        for(let itr =1; itr < jobs.length; itr++) {
            maxJobDeadline = Math.max(maxJobDeadline, jobs[itr].dead);
        }
        let timeSeriesJobArr = [];
        for(let itr = 0; itr < maxJobDeadline; itr++) {
            timeSeriesJobArr.push(-1);
        }
        let jobsCount = 0, jobsProfit = 0;
        for(let itr=0; itr < jobs.length; itr++) {
            let profit = jobs[itr].profit;
            let dead = jobs[itr].dead;
            
            for(let itrTime = dead-1; itrTime >=0; itrTime--) {
                if(timeSeriesJobArr[itrTime] == -1) {
                    timeSeriesJobArr[itrTime] = jobs[itr].id;
                    jobsProfit += jobs[itr].profit;
                    jobsCount++;
                    break;
                }
            }
        }
        
        return [jobsCount , jobsProfit];
    }
}
//https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1
/**
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

class Job{
    constructor(id, dead, profit){
        this.id = id;
        this.dead = dead;
        this.profit = profit;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = [];
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<3*n;i+=3){
            arr.push(new Job(input_ar1[i], input_ar1[i+1], input_ar1[i+2]));
        }
        let obj = new Solution();
        let ans = obj.JobScheduling(arr, n);
        let s = '';
        s += ans[0] + " " + ans[1];
        console.log(s);
    }
}// } Driver Code Ends

 */
//User function Template for javascript

/**
 * @param {Job[]} arr
 * @param {number} n
 * @returns {number[]}
*/

/*
class Job{
    constructor(id, dead, profit){
        this.id = id;
        this.dead = dead;
        this.profit = profit;
    }
}
*/


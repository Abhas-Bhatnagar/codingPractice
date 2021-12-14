/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let maxNum = 0,computedArr = [], sum = 0, pairArr = [], startFlag = true;
    for(let itr =0 ; itr < intervals.length ; itr++) {
        maxNum = Math.max(maxNum, intervals[itr][1]);
    }
    for(let itr =0; itr <= maxNum; itr++) {
        computedArr.push({s : 0,e : 0})
    }
    for(let itr=0; itr < intervals.length; itr++) {
        computedArr[intervals[itr][0]].s++;
        computedArr[intervals[itr][1]].e++;
    }
    for(let itr =0; itr <= maxNum; itr++) {
        sum += computedArr[itr].s;
        if(startFlag && sum!=0) {
            pairArr.push([itr]);
            startFlag = false;
        }
        if(!startFlag && sum>0 && computedArr[itr].e && sum >= computedArr[itr].e){
            sum -= computedArr[itr].e;
            if(sum ==0)  {
                pairArr[pairArr.length-1].push(itr);
                startFlag = true;
            }
        }
    }
    return pairArr;
};
// [ [1,2], [2,3], [2,5]]
// [[1,1]]
// [[2,2]]
// [[1,1],[4,4],[4,4]]

// https://leetcode.com/problems/merge-intervals/
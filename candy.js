/**
 * @param {number[]} ratings
 * @return {number}
 */
/** 

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

*/
// [1, 1, 1]
// [1, 1, 2]
// [2, 1, 2]

var candy = function(ratings) {
    let minArr = [];
    for(let itr = 0; itr < ratings.length; itr++) {
        minArr.push(1);
    }
    for(let itr =1; itr < ratings.length; itr++) {
        if(ratings[itr-1] < ratings[itr]) {
            minArr[itr] = minArr[itr-1] +1;
        }
    }
    // console.log(minArr)
    for(let itr =ratings.length-2; itr >=0 ; itr--) {
        if(ratings[itr] > ratings[itr+1]) {
            minArr[itr] = Math.max(minArr[itr+1]+1, minArr[itr] );
        }
    }
    // console.log(minArr)
    let sum = 0;
    for(let itr = 0; itr < ratings.length; itr++) { 
        sum += minArr[itr];
    }
    return sum;
    
};
//https://leetcode.com/problems/candy/
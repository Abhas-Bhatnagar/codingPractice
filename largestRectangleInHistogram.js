/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    
    let prevSmallElementArr = [];
    let stack = [];
    for(let itr = 0; itr < heights.length; itr++) {
        while(stack.length && heights[stack[stack.length-1]] >=  heights[itr]){
            stack.pop();
        }    
        if(stack.length == 0) {
            prevSmallElementArr.push(-1 + 1);
        } else {
            prevSmallElementArr.push(stack[stack.length-1] + 1);    
        }
        stack.push(itr);   
    }
    console.log(prevSmallElementArr);
    let nextSmallerElementArr = [];
    stack = [];
    for(let itr = heights.length-1; itr >= 0; itr--) {
        while(stack.length && heights[stack[stack.length-1]] >=  heights[itr]){
            stack.pop();
        }    
        if(stack.length == 0) {
            nextSmallerElementArr.push(heights.length-1);
        } else {
            nextSmallerElementArr.push(stack[stack.length-1] - 1);    
        }
        stack.push(itr);   
    }
    nextSmallerElementArr.reverse()
    console.log(nextSmallerElementArr);
    let maxArea = 0;
    for(let itr = 0; itr < heights.length; itr++) {
        let area = heights[itr] * ( nextSmallerElementArr[itr] - prevSmallElementArr[itr] +1 );
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
    
};
//https://leetcode.com/problems/largest-rectangle-in-histogram/
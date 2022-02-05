/**
 * @param {character[][]} matrix
 * @return {number}
 */
function histogramMaxArea(heights) {
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
  //  console.log(prevSmallElementArr);
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
   // console.log(nextSmallerElementArr);
    let maxArea = 0;
    for(let itr = 0; itr < heights.length; itr++) {
        let area = heights[itr] * ( nextSmallerElementArr[itr] - prevSmallElementArr[itr] +1 );
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
}
var maximalRectangle = function(matrix) {
    
    let heights = [];
    for(let itrCol = 0 ; itrCol < matrix[0].length; itrCol++) {
        heights.push(matrix[0][itrCol]);
    }
    let maxArea = histogramMaxArea(heights);
    for(let itrRow = 1 ; itrRow < matrix.length; itrRow++) {
        for(let itrCol = 0 ; itrCol < matrix[0].length; itrCol++) {
            let value = matrix[itrRow][itrCol];
            if(value == 0) {
                heights[itrCol] = 0;
            } else {
                heights[itrCol]++;
            }
        }
        let area = histogramMaxArea(heights);
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};
//https://leetcode.com/problems/maximal-rectangle/
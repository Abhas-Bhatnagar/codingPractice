/**
 * @param {number[][]} isConnected
 * @return {number}
 */

 function dfs(itrRow, itrCol, matrix, colorCounter){
    
    for(let itr = 0; itr < matrix[0].length; itr++) {
        if(matrix[itrRow][itr] == 1) {
            matrix[itrRow][itr] = colorCounter;
            dfs(itr, itrRow, matrix, colorCounter)
        }
    }
    return;
}

var findCircleNum = function(isConnected) {
    let colorStartNum = 1;
    let colorCounter = colorStartNum;
    for(let itrRow = 0; itrRow < isConnected.length ; itrRow++) {
        for(let itrCol = 0; itrCol < isConnected[0].length; itrCol++) {
            if(isConnected[itrRow][itrCol] == 1)
            dfs(itrRow, itrCol, isConnected, ++colorCounter) ;
        }
    }
    console.log(isConnected)
    return colorCounter-colorStartNum;
};
// https://leetcode.com/problems/number-of-provinces/
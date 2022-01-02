/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 function colorFill(matrix, itrRow, itrCol, oldColor, newColor) {
    // base cases -> out ot bound , zero, newColor
    if(itrRow < 0 || itrRow >= matrix.length || itrCol < 0 || itrCol >= matrix[0].length) {
        return;
    }
    if(matrix[itrRow][itrCol] != oldColor) {
        return;   
    }
    
    matrix[itrRow][itrCol] = newColor;
    colorFill(matrix, itrRow-1, itrCol, oldColor, newColor)
    colorFill(matrix, itrRow, itrCol+1, oldColor, newColor)
    colorFill(matrix, itrRow+1, itrCol, oldColor, newColor)
    colorFill(matrix, itrRow, itrCol-1, oldColor, newColor)
    return;
}
var floodFill = function(image, sr, sc, newColor) {
    if(image[sr][sc] == newColor) return image;
    colorFill(image, sr, sc, image[sr][sc], newColor);
    return image;
};
//https://leetcode.com/problems/flood-fill/
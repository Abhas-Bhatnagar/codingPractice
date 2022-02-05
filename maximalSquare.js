/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    let maxDiagonal = 0;
    let possibleSquare = [];
    
    for(let itrRow = 0; itrRow < matrix.length; itrRow++) {
        possibleSquare[itrRow%2] = [];
        for(let itrCol = 0; itrCol < matrix[0].length; itrCol++) {
            let value = matrix[itrRow][itrCol];
            if(value == 0) {
                possibleSquare[itrRow%2][itrCol] = 0;
            } else if(itrRow == 0 || itrCol == 0){
                possibleSquare[itrRow%2][itrCol] = value;
            } else {
                let minValue = Math.min(
                    possibleSquare[(itrRow-1)%2][itrCol-1],
                    possibleSquare[itrRow%2][itrCol-1],
                    possibleSquare[(itrRow-1)%2][itrCol]
                ) + 1;
               possibleSquare[itrRow%2][itrCol] = minValue;
            }
            maxDiagonal = Math.max(maxDiagonal, possibleSquare[itrRow%2][itrCol]);
        }
        
    }
    return maxDiagonal * maxDiagonal;
};
//https://leetcode.com/problems/maximal-square/
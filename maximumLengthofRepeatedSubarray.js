var findLength = function(arr1, arr2) {
// base cases
// length1, length2 is 0 or 1
// if max Length did not exists 
// 1 char length match
// overlapping subArr

let maxLength = 0;
if(arr1.length == 0 || arr2.length ==0)     return maxLength;

let matrix = [];
for(let itrRow=0; itrRow < arr1.length; itrRow++) {
	matrix[itrRow] = []
for(let itrCol = 0; itrCol < arr2.length; itrCol++){
		if(arr1[itrRow] == arr2[itrCol] ) {
	      if( itrRow == 0  || itrCol == 0 ) {
matrix[itrRow][itrCol] = 1;
maxLength = Math.max(maxLength, matrix[itrRow][itrCol]);
		     } else {
		matrix[itrRow][itrCol] = matrix[itrRow - 1 ][itrCol - 1] + 1;
		maxLength = Math.max(maxLength, matrix[itrRow][itrCol]);
                               }
} else {
	matrix[itrRow][itrCol] = 0;
}
}
}
   // console.log(matrix)
return maxLength;
};

//https://leetcode.com/problems/maximum-length-of-repeated-subarray/
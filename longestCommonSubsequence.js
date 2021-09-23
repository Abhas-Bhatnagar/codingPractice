var longestCommonSubsequence = function(text1, text2) {
    let matrix = []; //  text1.length + 1


   for(let itrRow = 0 ; itrRow < text1.length + 1; itrRow++) {
matrix[itrRow] = [];    // text2.length + 1
matrix[itrRow].push(0);

	for(let itrCol = 1 ; itrCol < text2.length +  1 ; itrCol++) {
if(itrRow == 0 )  {
matrix[itrRow][itrCol] = 0;
}
		else if( text1[itrRow-1] ==  text2[itrCol-1] ) {
	matrix[itrRow][itrCol] = matrix[itrRow - 1 ][itrCol - 1]   +  1;
} else {
		matrix[itrRow][itrCol] =  Math.max(matrix[itrRow-1][itrCol] , matrix[itrRow][itrCol-1]);
}
}
   }
   return  matrix[text1.length][text2.length];
	
};


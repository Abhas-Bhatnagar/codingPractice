var minDistance = function(word1, word2) {
    
    let matrix = [];
    // console.log(word1.length+"_");
    // console.log(word2.length);
    
    
    for(let itrRow = 0 ; itrRow <= word1.length; itrRow++) {
        //console.log("itrRow" + "__" + itrRow)
        matrix[itrRow % 2] = [];
        for(let itrCol = 0; itrCol <= word2.length; itrCol ++) {
          //  console.log(itrRow + "__"+ itrCol)
            
            if( itrRow == 0 ){
              matrix[itrRow  % 2 ][itrCol] = itrCol;
            } else if ( itrCol == 0 ) {
              matrix[itrRow  % 2 ][itrCol] = itrRow;
            } else if (word1[itrRow-1] == word2[itrCol-1]) {
                matrix[itrRow  % 2 ][itrCol] = matrix[(itrRow - 1) % 2 ][itrCol -1];
            } else {
                // insert            
                matrix[itrRow  % 2 ][itrCol] = Math.min(
                    matrix[itrRow  % 2 ][itrCol - 1],   // insert
                    matrix[(itrRow - 1)  % 2][itrCol]   // delete
                    //matrix[(itrRow - 1)  % 2][itrCol - 1]
                ) + 1;
            }
        }
    }
    
    console.log(matrix)
    return matrix[word1.length % 2][word2.length];
    
};
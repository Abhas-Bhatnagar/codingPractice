function minSteps(s1, s2, index1, index2, hashMap) {
  // console.log(index1, index2);
   if(s1.length == index1){
      return s2.length - index2;
   }
   if(s2.length == index2){
      return s1.length - index1;
   }
   let key = index1+"_"+index2;
   
   if(hashMap.hasOwnProperty(key)) {
       return hashMap[key];
   }
   
   if(s1[index1] == s2[index2]) {
       hashMap[key] = minSteps(s1, s2, index1+1, index2+1, hashMap);
       return hashMap[key];
   } else {
       let insert = minSteps(s1, s2, index1, index2+1, hashMap);
       let del = minSteps(s1, s2, index1+1, index2, hashMap);
       let replace = minSteps(s1, s2, index1+1, index2+1, hashMap);
       let minOps = Math.min(insert, del, replace);
       hashMap[key] = minOps +1;
       return hashMap[key];
   }
}
var minDistance = function(word1, word2) {
   let hashMap = {};
   
   let steps= minSteps(word1, word2, 0, 0, hashMap);
 //  console.log(hashMap);
   return steps;
   
};

//----------------------------------------------------------------------------------------------------------------
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
                // horses
                // avsrof
                
                matrix[itrRow  % 2 ][itrCol] = Math.min(
                    matrix[itrRow  % 2 ][itrCol - 1],
                    matrix[(itrRow - 1)  % 2][itrCol],
                    matrix[(itrRow - 1)  % 2][itrCol - 1]
                ) + 1;
            }
        }
    }
    
    console.log(matrix)
    return matrix[word1.length % 2][word2.length];
    
    
};

//https://leetcode.com/problems/edit-distance/
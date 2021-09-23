function wordSearchFound(visited, board, wRow , wCol , word, wIndex) {
    //console.log( wRow , wCol , wIndex)
    if(wRow < 0 || wRow >= board.length || wCol < 0 || wCol >= board[0].length || wIndex >= word.length  )  {
        return false;
    }
    // visited code
    if(visited[wRow][wCol]) return false;
    
    let chBoard = board[wRow][wCol], chWord = word[wIndex];
    if(chBoard != chWord) {
       return false;
    }
    visited[wRow][wCol] = 1;
    if(word.length-1 == wIndex) { // position
        return true;
    } 
    
    
    let foundFlag =  (
        wordSearchFound(visited, board, wRow -1 , wCol, word, wIndex+1) ||
        wordSearchFound(visited, board, wRow  , wCol + 1, word, wIndex+1) ||
        wordSearchFound(visited, board, wRow +1 , wCol, word, wIndex+1) ||
        wordSearchFound(visited, board, wRow , wCol - 1, word, wIndex+1)
    )
    visited[wRow][wCol] = 0;
    
    return foundFlag;
    
}
var exist = function(board, word) {
    
    let visited = [];
    for(let itrRow = 0 ; itrRow < board.length; itrRow++ ) {
        visited[itrRow] = [];
        for(let itrCol=0; itrCol < board[0].length; itrCol++) {
             visited[itrRow].push(0);
        }
    }
    
  // console.log(visited) 
    for(let itrRow = 0 ; itrRow < board.length; itrRow++ ) {
        for(let itrCol=0; itrCol < board[0].length; itrCol++) {
            let chBoard = board[itrRow][itrCol];
            if( chBoard == word[0] && 
                wordSearchFound(visited, board, itrRow, itrCol, word, 0)
              ) {
                return true;
            }
        }
    }
    return false;
};

//https://leetcode.com/problems/word-search/
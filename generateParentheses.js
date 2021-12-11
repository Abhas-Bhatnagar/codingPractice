/**
 * @param {number} n
 * @return {string[]}
 */
let counter = 0;

function insertParenPair(str, oCount, cCount, result){
    if(oCount > cCount) return;
    if(oCount < 0 || cCount < 0) return;
    // base cases
    if(cCount == 0 && cCount == oCount)  {
        result.push(
            str
        );
    }
    counter++;
    
    insertParenPair(str+"(", oCount -1 , cCount , result);
    insertParenPair(str+")", oCount , cCount - 1, result);
    
    
}

var generateParenthesis = function(n) {
    let result = [];
    counter = 0;
    insertParenPair("", n, n , result)
    console.log(n+":"+counter)
    return result;
};

//( "", 1 , 1, [],  "l")                        
//( "(", 0 , 1, [], "l")  ( ")", 1 , 0, [], "r")-XX
//( "((", -1 , 1, [], "l")-XX  ( "()", 0 , 0, [], "r")
//https://leetcode.com/problems/generate-parentheses/
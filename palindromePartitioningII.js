function isPalindromeDP(str){
    let table = [];
    for(let itrRow =0; itrRow  < str.length ; itrRow++) {
        let rowArr = [];
        for (let itrCol = 0; itrCol < str.length; itrCol++) {
            rowArr.push(0);
        }
        table.push(rowArr);
    }

    for (let itrCol = 0; itrCol < str.length; itrCol++) {
        for(let itrRow = 0, itrTmpCol = itrCol; itrRow<str.length && itrTmpCol<str.length; itrRow++, itrTmpCol++) {
            let value = 0;
            if(itrRow == itrTmpCol) {
                value = 1;
            } else if (itrRow < itrTmpCol) {
                if (str[itrRow] == str[itrTmpCol]) {
                    if (itrTmpCol - itrRow == 1) {
                        value = 1;
                    } else if(table[itrRow+1][itrTmpCol-1] == 1){
                        value = 1;
                    }
                } 
            }
            console.log(itrRow+"_"+itrTmpCol)
            table[itrRow][itrTmpCol] = value;
        }
    }
    //      "a" "b" "c" "b" "a"
    //"a"
    //"b"
    //"c"
    //"b"
    //"a"

    // 0,0 -> 1,1 -> 2,2 -> 3,3 -> 4,4
    // 0,1 -> 1,2 -> 2,3 -> 3,4
    // 0,2 -> 1,3 -> 2,4
    // 0,3 -> 1,4
    return table;
}
console.log(isPalindromeDP("abcba"))
function isPalindrome(str, startIndex, endIndex) {
    if(startIndex == endIndex) return true;    
    let length = (endIndex - startIndex  +1) /2;
    length = Math.floor(length);
    for(let itr = 0; itr < length; itr++ ) {
        if(str[startIndex++] != str[endIndex--]) {
            return false;
        }
    }
    return true;
}
function minCuts(str, startIndex, endIndex, hashMap) {
    
    let hashkey = startIndex + "_" + endIndex;
    if(hashMap.hasOwnProperty(hashkey)) return hashMap[hashkey];

    // base cases
    if(isPalindrome(str, startIndex, endIndex)) return hashMap[hashkey]=0;    
    
    let minCutsCount = Infinity;
    for(let itr = startIndex+1; itr <= endIndex; itr++) {
        minCutsCount = Math.min( (
            minCuts(str,startIndex, itr-1, hashMap) + 
            minCuts(str,itr, endIndex, hashMap) + 
            1) , minCutsCount );
    }
    hashMap[hashkey] = minCutsCount;
    
    return hashMap[hashkey];
}
var minCut = function(s) {
    // check if string s is a palindrome ==> return 0
    if(isPalindrome(s, 0, s.length-1)) return 0;
    
    let hashMap = {};
    
    return minCuts(s, 0, s.length-1, hashMap);
    
};
// minCut("aab")
//console.log(minCut("adabdcaebdcebdcacaaaadbbcadabcbeabaadcbcaaddebdbddcbdacdbbaedbdaaecabdceddccbdeeddccdaabbabbdedaaabcdadbdabeacbeadbaddcbaacdbabcccbaceedbcccedbeecbccaecadccbdbdccbcbaacccbddcccbaedbacdbcaccdcaadcbaebebcceabbdcdeaabdbabadeaaaaedbdbcebcbddebccacacddebecabccbbdcbecbaeedcdacdcbdbebbacddddaabaedabbaaabaddcdaadcccdeebcabacdadbaacdccbeceddeebbbdbaaaaabaeecccaebdeabddacbedededebdebabdbcbdcbadbeeceecdcdbbdcbdbeeebcdcabdeeacabdeaedebbcaacdadaecbccbededceceabdcabdeabbcdecdedadcaebaababeedcaacdbdacbccdbcece"))

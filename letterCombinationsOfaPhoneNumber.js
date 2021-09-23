function letterComb(adjList, str, strItr, currentStr, outputArr){
    if(strItr >= str.length) return;
    if(strItr == str.length -1) {
        let digit = str[strItr];
        for(let itr = 0 ; itr < adjList[digit].length ; itr++) {
            outputArr.push(
                currentStr + adjList[digit][itr]
            );
        }
        return;
    }
    
    let digit = str[strItr];
        for(let itr = 0 ; itr < adjList[digit].length ; itr++) {
            letterComb(adjList, str, strItr + 1, currentStr + adjList[digit][itr] , outputArr);
        }
    return;
}
var letterCombinations = function(digits) {
    let adjList = {
        '2' : ['a' , 'b' , 'c'],
        '3' : ['d' , 'e' , 'f'],
        '4' : ['g' , 'h' , 'i'],
        '5' : ['j' , 'k' , 'l'],
        '6' : ['m' , 'n' , 'o'],
        '7' : ['p' , 'q' , 'r' , 's'],
        '8' : ['t' , 'u' , 'v'],
        '9' : ['w' , 'x' , 'y' , 'z'],
    };
    let outputArr = [];
    if(!digits.length) return outputArr;
    let currentStr = "";
    letterComb(adjList, digits, 0, currentStr ,outputArr);
    
    return outputArr;
};
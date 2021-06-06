var longestPalindrome = function(s) {
    if(!s.length) return "";
    let table = [];
    for(let itrRow = 0 ; itrRow < s.length; itrRow++) {
        let colArr = [];
        for(let itrCol = 0 ; itrCol < s.length; itrCol++) { 
            let value = 0;
            if(itrCol === itrRow) {
                value = 1;
            }
            colArr.push(value);
        }
        table.push(colArr);
    }
    
    let subStrLength = 1, subStr = s[0];
    for(let itrRow = 0 ; itrRow < s.length; itrRow++) {
        for(let itrCol = itrRow+1 ; itrCol < s.length; itrCol++) {
            if(s[itrRow] == s[itrCol] ) {
                if((itrRow+1) <= (itrCol-1)) {
                    table[itrRow][itrCol] = 1;
                } else {
                    table[itrRow][itrCol] = 1;
                }
                let len = itrCol - itrRow + 1;// always +ve
                if(subStrLength < len) {
                    subStrLength = len;
                    subStr = s.slice([itrRow],[itrCol+1])
                }
            }
         }
    }
    console.log(table);
    console.log(subStr);
    return subStr;

};
let arr = [
    "babad",
    "cbbd",
    "a",
    "ac",
    "aacabdkacaa"
]
longestPalindrome(arr[4])
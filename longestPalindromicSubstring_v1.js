function longestPStr(str, index){
    let longestStrLen, start, end;

    if(str.length % 2 == 1) { // odd
        longestStrLen = 1;
        start = index -1, end = index + 1;
    } else { // even 
        longestStrLen = 0;
        start = index, end = index + 1;
    }
    
    while(start >= 0 && end <= (str.length-1) && str[start] == str[end]) {
        longestStrLen += 2;
        start--;
        end++;
    }
    // if(start < 0 || end >= str.length) {
        return longestStrLen;
    // }
}

let testCases = [
    {
        str : "babab",
        index : 2
    },
    {
        str : "abac",
        index : 1
    }
];
for (let index = 0; index < testCases.length; index++) {
    let testCase = testCases[index];
    console.log(testCase.str+": "+longestPStr(testCase.str, testCase.index));
}

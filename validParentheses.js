var isValid = function(s) {
    if (s.length % 2 == 1) { // odd case 
        return false;
    }
    let matchingBracketMapper = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    };
    let stack = [];
    for (let itr = 0; itr < s.length; itr++) {
        let ch = s[itr];

        if ( ch == "(" || ch == "[" || ch == "{" ) {
            stack.push(ch);
        } else { // ch == ")" , "]" , "}"
            if ( stack.length == 0 ) {
                return false;
            }
            let popEle = stack.pop(); // "(" , "[" , "{"
            if(matchingBracketMapper[ch] != popEle) {
                return false;
            }
        }
        
    }
    return stack.length > 0 ? false : true;
};



let testCases = [
    "(",
    "]",
    "()(",
    "[()]", // valid
    "[(])",
    "[[[]])",
    ")(",
    "()[]{}",
    "(]",
    "()"
];

//length is odd then false


for (let itr = 0; itr < testCases.length; itr++) {
    let testCase = testCases[itr];

    console.log("itr"+itr);
    console.log("testCase: "+testCase);
    console.log("isValid: "+isValid(testCase));
    console.log("--------------------------");
    
}
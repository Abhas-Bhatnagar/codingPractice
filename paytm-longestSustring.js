function longStr(given_string) {

    let length = 0;
    let start = 0;
    let end = 0;
    let dict = {};
    debugger
    while(start<=end){

        if(dict.hasOwnProperty(given_string[end])){
            dict[given_string[end]]++;
            if(dict.hasOwnProperty(given_string[end]) && dict[given_string[end]] >1 ) {
                let temp = end-start;
                length = Math.max(length,temp);
                dict[given_string[end]]--;
                start++;
            }
        } else {   
            dict[given_string[end]] = 1
            end++;
        
        }
    }
    return length;
}

console.log(longStr("abcabcdeb"))




1, 7, 10, 15

17



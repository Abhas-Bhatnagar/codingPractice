function isPredecessor(str1, str2){
    if(str1.length > str2.length) return isPredecessor(str2, str1);

    if(str2.length != str1.length + 1 ) return false;
    let itr1 =0 , itr2 =0;
    
    while(itr1 < str1.length && itr2 < str2.length) {
        let ch1 = str1[itr1];
        let ch2 = str2[itr2];

        console.log("ch1 "+ch1+" itr1 "+itr1)
        console.log("ch2 "+ch2+" itr2 "+itr2)

        if(ch1 == ch2) {
            itr1++;
            itr2++;
        } else {
            itr2++;
        }

        if(itr2 - itr1 > 1) {
            return false;
        }

    }
    return true;    
}


console.log("isPredecessor "+isPredecessor("bda", "bddk"))




var longestStrChain = function(words) {
    if(!words.length || words.length == 1)    return words.length;
    words.sort((a, b)=>{return a.length - b.length;})
    
    
    
    
    let lisArr = [], maxLIS = 1;
    lisArr[words.length-1] = 1;
    for(let itr = words.length-2; itr >= 0; itr--) {
        lisArr[itr] = 1;
        
        let exeFlag = false;
        for(let innerItr = itr+1; innerItr < words.length; innerItr++) {
            if( isPredecessor(words[itr], words[innerItr]) ) {
                lisArr[itr] = Math.max(lisArr[itr], lisArr[innerItr]);
                exeFlag = true;
            }
        }
        if(exeFlag) {
            lisArr[itr]++;
            maxLIS = Math.max(maxLIS, lisArr[itr]);
        }        
    }
    return maxLIS;
    
    
    
};

//https://leetcode.com/problems/longest-string-chain/
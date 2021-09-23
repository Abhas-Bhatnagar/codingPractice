var minWindow = function (s, t) {
    let minWindowSize = s.length +  1, startIndex = 0;
    let rPointer = -1, lPointer = 0, freqMap = {}, matchedStr = 0;
    debugger
    for (let itr = 0; itr < t.length; itr++) {
        let ch = t[itr];
        !freqMap.hasOwnProperty(ch) && (freqMap[ch] = 0);
        freqMap[ch]++;
    }
    while(rPointer < s.length - 1){
        rPointer++;
        let ch = s[rPointer];
        if (freqMap.hasOwnProperty(ch) && freqMap[ch] > 0) {
            freqMap[ch]--;
            matchedStr++;
        }
        if (matchedStr != t.length) {
            continue;
        }
        if (minWindowSize > (rPointer- lPointer + 1) ) {
            minWindowSize = (rPointer- lPointer + 1);
            startIndex = lPointer;
        }
        //minWindowSize =  Math.min(minWindowSize, rPointer- lPointer + 1);
        while(matchedStr == t.length) {
            let ch = s[lPointer];
            lPointer++;
            if (freqMap.hasOwnProperty(ch)) {
                freqMap[ch]++;
                matchedStr--;
                // minWindowSize =  Math.min(minWindowSize, rPointer- lPointer + 1);
            } else if (minWindowSize > (rPointer- lPointer + 1) ) {
                minWindowSize = (rPointer- lPointer + 1);
                startIndex = lPointer;
            }
        }
    }
    return minWindowSize == t.length +  1 ? '' : (s.substr(startIndex, minWindowSize));
}

// var minWindow = function (s, t) {
//     // base cases     // empty string s or t == 0 or 1    // if no matching
//     debugger
//     if (!t.length || !s.length) return '';
//     let freqMap = {}, matchLength = 0, minWindowLen = s.length + 1, startIndex = -1;
//     for (let itr = 0; itr < t.length; itr++) {
//         let ch = t[itr];
//         !freqMap.hasOwnProperty(ch) && (freqMap[ch] = 0);
//         freqMap[ch]++;
//     }
//     let rPointer = -1, lPointer = 0;
//     while (rPointer < s.length - 1) {
//         while (rPointer < s.length - 1) {
//             rPointer++;
//             let ch = s[rPointer];
//             freqMap[ch] && (matchLength++);
//             freqMap[ch] && (freqMap[ch]++);
//             if (matchLength == t.length) {
//                 minWindowLen = Math.min(minWindowLen, rPointer - lPointer + 1);
//                 startIndex = lPointer;
//                 break;
//             }
//         }
        
//         while (lPointer <= rPointer) {
//             lPointer++;
//             let ch = s[lPointer];
//             freqMap[ch] && (matchLength--);
//             freqMap[ch] && (freqMap[ch]--);
//             if (matchLength != s.length) {
//                 freqMap.hasOwnProperty(ch) && (matchLength++);
//                 freqMap.hasOwnProperty(ch) && (freqMap[ch]++);
//                 break;
//             } 
//             minWindowLen = Math.min(minWindowLen, rPointer - lPointer + 1);
//             startIndex = lPointer;
//         }
        
//     }
//     return s.substr(lPointer, minWindowLen);
// };
// console.log(minWindow("ADOBECODEBANC", "ABC"))
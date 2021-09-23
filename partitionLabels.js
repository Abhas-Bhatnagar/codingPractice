var partitionLabels = function(s) {
    let startIndex = -1, freqMap = {};
    for(let itr = 0 ; itr < s.length ; itr++) {
        let ch = s[itr];
        !freqMap.hasOwnProperty(ch) && (freqMap[ch] = 0);
        freqMap[ch]++;
    }
    
    let tempHashMap = {}, arr = [], distinctCharCount = 0;
    for(let itr = 0 ; itr < s.length ; itr++) {
        let ch = s[itr];
        if(startIndex == -1) {
            startIndex = itr;
        }
        if(!tempHashMap[ch]){
           distinctCharCount++;
        }
        tempHashMap[ch] = 1;
        freqMap[ch]--;
        
        if(freqMap[ch] == 0 ) {
            delete tempHashMap[ch];
            distinctCharCount--;
            
            if(distinctCharCount == 0) {
                arr.push(itr - startIndex + 1);
                startIndex= -1
            }
        }
        
    }
    return arr;
    
};
// https://leetcode.com/problems/partition-labels/
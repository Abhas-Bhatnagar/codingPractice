
class Solution {
    distinctChar(str){
        let chFreq = {}, distinctChar = 0;
        for(let itr =0; itr < str.length; itr++) {
              if(!chFreq.hasOwnProperty(str[itr])) {
                chFreq[str[itr]] = 0 
                distinctChar++;
              } 
            chFreq[str[itr]]++;
        }
        return distinctChar;
    }
  
    findSubString(str){
       let smallestWindow = str.length;
       let distinctChar = this.distinctChar(str);
       
       let start = 0, end = 0, charFreq = {}, tmpDistinctChar = 1;
       charFreq[str[0]] =  1;
       
       while(start <= end && end < str.length) {
           // how many distinct char in given window [start, end]
           if(tmpDistinctChar < distinctChar) {
               end++;
               
                if(end < str.length) {
                  if(!charFreq.hasOwnProperty(str[end]) || charFreq[str[end]] == 0) {
                       tmpDistinctChar++;
                   }
                   !charFreq.hasOwnProperty(str[end]) && (charFreq[str[end]] = 0);
                   charFreq[str[end]]++;
               }
               
           } else if (tmpDistinctChar >= distinctChar) {
               let tmpWindowSize = end - start + 1;
               smallestWindow = Math.min(smallestWindow, tmpWindowSize);
               
               if(start < str.length) {
                    charFreq[str[start]]--;
                   if(charFreq[str[start]] == 0) {
                       tmpDistinctChar--;
                   } 
               }
               start++;
               
           }
       }
       
       
       return smallestWindow;
    }
}
//https://practice.geeksforgeeks.org/problems/smallest-distant-window3132/1#
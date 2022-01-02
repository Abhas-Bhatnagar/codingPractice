function sentenceSimilarity(word1, word2, pairs) {
    // base cases
    if(word1.length != word2.length) return false;
    let pairMap = {};
    for (let itr = 0; itr < pairs.length; itr++) {
        let w1 = pairs[itr][0];
        let w2 = pairs[itr][1];
        let wordSortedHashKey = [w1, w2].sort().join("");
        !pairMap.hasOwnProperty(wordSortedHashKey) && (pairMap[wordSortedHashKey] = 1);
    }

    for (let itr = 0; itr < word1.length; itr++) {
        let w1 = word1[itr];
        let w2 = word2[itr];
        let wordSortedHashKey = [w1, w2].sort().join("");

        if(w1 == w2) {
            continue;
        } else if(!pairMap[wordSortedHashKey]) {
            return false;
        }
    }
    return true;
}

let word1 = ["great" ,"acting" ,"skills"]
let word2 = ["fine", "drama", "talent"];
let pairs = [["great", "fine"], ["acting","drama"], ["skills","talent"]]
console.log(sentenceSimilarity(word1, word2, pairs))
//https://leetcode.ca/all/734.html
//https://leetcode.com/problems/sentence-similarity/
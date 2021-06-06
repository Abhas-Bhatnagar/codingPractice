let str = "leetcode", wordDict = ["leet","code"]
let dictMapper = {}, mapper = {};
mapper[-1] = true;

for (let itr = 0; itr < wordDict.length; itr++) {
    let word = wordDict[itr];
    dictMapper[word] = true;
}
console.log(dictMapper)
for (let outer = 0; outer < str.length; outer++) {
        for (let inner = 0; inner <= outer; inner++) {
        let subStr = str.substring(inner , outer+1);
        console.log("subStr", subStr)
        if(mapper[inner -  1] && dictMapper.hasOwnProperty(subStr)) {
            mapper[outer] = true;
        }   
    }
}
console.log(mapper)
// "l"

// "le"
// "e"

// "lee"
// "ee"
// "ee"
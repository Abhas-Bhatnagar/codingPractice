class Solution {
    
  reverseWord(str){
      //Your code here
      str = str.split("")
      for(let itr= 0 ; itr < str.length/2 ; itr++) {
          let ch = str[itr];
          str[itr] = str[(str.length - 1 - itr)];
          str[(str.length - 1 - itr)] = ch;
      }
      str = str.join("");
      return str;
  }
}

let testCases = [
  "Geeks",
  "for",
  "g"
];

let obj = new Solution();
for (let caseNum = 0; caseNum < testCases.length; caseNum++) {
  
  console.log("test case " + caseNum + " "+ obj.reverseWord(testCases[caseNum]))  
}



/**
        *  
      * * * 
    * * * * *
  * * * * * * *
* * * * * * * * * 

row            //  0 , 1 , 2 , 3, 4  
number of rows //  5

series spaces  //  4 , 3 , 2 , 1, 0
series star    //  1,  2 , 3,  4, 5


n = 5 
// case 1
rowItr = 0 
spaceItr =  4 // n - (rowItr +  1)
starItr = 1   // rowItr + 1

// case 2
rowItr = 1
spaceItr = 3  // n - (rowItr +  1)
starItr = 2   // rowItr + 1


n = 5 

for (let rowItr = 0; rowItr < n; rowItr++) {    
    for(let itrSpaces = 0 ; itrSpaces <  n - (rowItr +  1) ;  itrSpaces++) {
        
    }
    for(let starItr = 0 ; starItr <  rowItr + 1 ;  starItr++) {
        
    }
}
 */
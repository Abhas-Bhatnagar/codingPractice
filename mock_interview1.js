[1, -5, 6, 10, 4, 8]


[6, 6, 10, -1, 8, -1]
// i = 0
// j = (i+ 1)%arr.length || (j < i )
// if(arr[i] < arr[j]) {max[i] = arr[j];break;};



arr = [10, 7, 4, 3, 2, 5, 8]
answer = [ 10 , 8 , 5, 5, 5 , 8 , 8]


stack =
7
8


function maxEleIndex(arr) {
    let max = arr[0], index = 0;

    for (let itr = 1; itr < arr.length; itr++) {
        if(max < arr[itr])  {
            max = arr[itr];
            index = itr;
        }
    }
    return index;
}


var nextGreaterElements = function(arr) {
    if(arr.length == 1) [-1];

    let nextGEArr = [];    
    let reverseStartingIndex = maxEleIndex(arr);
    nextGEArr[reverseStartingIndex] = -1;
    
    let stack = [arr[reverseStartingIndex]];
    let itr = reverseStartingIndex -1 ;

    while(itr !=  reverseStartingIndex ) {
        let currentEle = arr[itr];
        
        while(stack.length >= 1 && currentEle > stack[stack.length-1]){
              stack.pop();
        }
        if(stack.length == 0) {
            nextGEArr[itr] = -1;  
            stack.push(currentEle);
        } else {
            let stackEle = stack[stack.length-1]
            nextGEArr[itr] = stackEle;    
            stack.push(currentEle);
        }

        if(itr == 0) itr = arr.length;
        itr--
    }    
    return nextGEArr;
};




function maxEleIndex(arr) {
    let max = arr[0], index = 0;

    for (let itr = 1; itr < arr.length; itr++) {
        if(max < arr[itr])  {
            max = arr[itr];
            index = itr;
        }
    }
    return index;
}


var nextGreaterElements = function(arr) {
    if(arr.length == 1) [-1];

    let nextGEArr = new Array(arr.length);    
    let reverseStartingIndex = maxEleIndex(arr);
    nextGEArr[reverseStartingIndex] = -1;
    
    let stack = [arr[reverseStartingIndex]];
    let itr = reverseStartingIndex -1 ;
    
    // console.log(arr)
    // console.log(reverseStartingIndex)
    while(itr !=  reverseStartingIndex ) {
        let currentEle = arr[itr];
        
        while(stack.length >= 1 && currentEle >= stack[stack.length-1]){
              stack.pop();
        }
        if(stack.length == 0) {
            nextGEArr[itr] = -1;  
            stack.push(currentEle);
        } else {
            let stackEle = stack[stack.length-1]
            nextGEArr[itr] = stackEle;    
            stack.push(currentEle);
        }

        if(itr == 0) itr = arr.length;
        itr--
        // console.log(stack)
        
    }    
    return nextGEArr;
};



//https://leetcode.com/problems/next-greater-element-ii/
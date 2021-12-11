/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(arr) {
   let printArr = [];

        let stack = [];
        stack.push({index : 0 , value : arr[0]});

        for (let itr = 1; itr < arr.length; itr++) {
            let currentElement = arr[itr];
            while(stack.length && currentElement > stack[stack.length-1].value){
                let stackTop = stack.pop();
                //console.log(stackTop.value+"--> "+currentElement);    
                printArr[stackTop.index] = {current : stackTop.value , nextGreaterElement : currentElement }; 
            }
            stack.push({ index : itr , value : currentElement});
        }
        for (let itr = 1; itr < arr.length; itr++) {
            let currentElement = arr[itr];
            while(stack.length && currentElement > stack[stack.length-1].value){
                let stackTop = stack.pop();
                //console.log(stackTop.value+"--> "+currentElement);    
                printArr[stackTop.index] = {current : stackTop.value , nextGreaterElement : currentElement }; 
            }
        }

        while(stack.length) {
            let stackTop = stack.pop();
            let currentElement = -1
            //console.log(stackTop.value+"--> "+currentElement);    
            printArr[stackTop.index] = {current : stackTop.value , nextGreaterElement : currentElement }; 
        }
    
        for (let itr = 0; itr < printArr.length; itr++) {
            console.log(printArr[itr].current+"--> "+printArr[itr].nextGreaterElement);    
        }
    
    printArr = printArr.map((elem)=> { return elem.nextGreaterElement; } );
    return printArr;
    
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, arr) {
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

        while(stack.length) {
            let stackTop = stack.pop();
            let currentElement = -1
            //console.log(stackTop.value+"--> "+currentElement);    
            printArr[stackTop.index] = {current : stackTop.value , nextGreaterElement : currentElement }; 
        }
        for (let itr = 0; itr < printArr.length; itr++) {
            console.log(printArr[itr].current+"--> "+printArr[itr].nextGreaterElement);    
        }
    
    let hasMap = {};
    for(let itr = 0 ; itr < arr.length ; itr ++) {
        hasMap[arr[itr]] = itr;
    }
    let output = [];
    for(let itr = 0 ; itr < nums1.length ; itr ++) { 
        if(hasMap.hasOwnProperty(nums1[itr])) {
            output.push(
                printArr[hasMap[nums1[itr]]].nextGreaterElement
            );
        }
    }
    return output;
};


//https://leetcode.com/problems/next-greater-element-i/
//  next less element of an element
// [3, 7, 8, 4]
// [ -1 , 4  , 4 ,-1]
function nextLessEle(arr) {
    let ans = [];
    ans.push(-1);
    if(arr.length==1) return ans;
    let stack = [arr.length-1];

    for (let itr = arr.length-2; itr >= 0; itr--) {
        let currentEle = arr[itr];
        while(stack.length && arr[stack[stack.length-1]] >= currentEle) {
            stack.pop();
        }
        ans.push(stack.length == 0 ? -1 : arr[stack[stack.length-1]] );
        stack.push(itr);
   }
   return ans.reverse();
}
// console.log(nextLessEle([3, 7, 8, 4]))
// console.log(nextLessEle([4, 4, 4, 4, 7]))




// [3, 7, 8, 4]
// [-1, 3, 7, 1]
function previousLessEle(arr) {
    let ans = [];
    ans.push(-1);
    if(arr.length==1) return ans;
    let stack = [0];

    for (let itr = 1; itr < arr.length; itr++) {
        let currentEle = arr[itr];
        while(stack.length && arr[stack[stack.length-1]] >= currentEle) {
            stack.pop();
        }
        ans.push(stack.length == 0 ? -1 : arr[stack[stack.length-1]]);
        stack.push(itr);
   }
   return ans;
}

// console.log(previousLessEle([3, 7, 8, 4]))
// console.log(previousLessEle([4, 4, 4, 4, 7]))




// arr = [3,1,2,4]


// let minArr = [];
// for (let itrRow = 0; itrRow < array.length; itrRow++) {
//     for(let itrCol = 0 ; itrCol < array.length - itrRow ; itrCol++) {
//         let windowStart = itrCol;
//         let windowLength = itrRow;
//         let window = getWindowEle(windowStart, windowLength);
//         minArr.push(Math.min(window));
//     }
// }


// 0, 1, 2, 3
// 0, 1, 2
// 0, 1,
// 0




var sumSubarrayMins = function(arr) {
    let nextLessEleArr = nextLessEle(arr);
    let priviousLessEleArr = previousLessEle(arr);
    console.log(arr)
    console.log("nextLessEleArr "+nextLessEleArr)
    console.log("priviousLessEleArr "+priviousLessEleArr)
    // case  arr.length == 1 

    // let ans = [];
    // let stack_start = [];
    // let stack_end = [];

    // for (let itr = 0; itr < arr.length; itr++) {
    //     ans[itr] = 1;
    // }

    // for(let itr = 0 ; itr < arr.length ; itr++) {
    //     let startEle = arr[itr];
    //     let endEle = arr[arr.length - itr - 1];

    //     while(stack_start.length && startEle < arr[stack_start[stack_start.length-1]]) {
    //         stack_start.pop();
    //     }

    //     while(stack_end.length && endEle < arr[stack_end[stack_end.length-1]]) {
    //         stack_end.pop();
    //     }
    //     // start
    //     let value = stack_start.length ? arr[stack_start[stack_start.length-1]] - itr : 1;
    //     ans[itr] *= value;
    //     console.log(`prev itr:${itr} value:${value}`)
    //     // end
    //     value = stack_end.length ? arr[stack_end[stack_end.length-1]] - itr  : 1;
    //     ans[arr.length - itr - 1] *= value;
        
    //     console.log(`next itr:${arr.length - itr - 1} value:${value}`)

    //     // 
    //     ans[itr] *= arr[itr];

    //     stack_start.push(itr);
    //     stack_end.push(stack_start.length-1);
    // }
    // console.log("arr", ans)
    // return ans
};
sumSubarrayMins([3,1,2,4])
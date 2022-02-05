/**
 * @param {number[][]} envelopes
 * @return {number}
 */
// 10, 15, 20, 25, 30, 40 -> 2
// 10, 15, 20, 20, 30, 40 -> 2
// 10, 15, 22, 25, 30, 40 -> 2
function lower_bound(arr, start, end, target) {
    
    while(start < end) {
        let mid = Math.floor((start + end)/2);
        if(target == arr[mid]) {
           end = mid;
        } else if (target < arr[mid]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    while(start < arr.lenght && arr[start] < target) {
          start++;
    }
    return start;
}
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a, b)=>{
        if(a[0] != b[0]) {
           return a[0]-b[0];
        } else {
            return b[1]-a[1];
        }
    });
    envelopes = envelopes.map((arr)=>{return arr[1]});
    
    let lisArr = [];
    for(let itr = 0; itr < envelopes.length; itr++) {
        if(itr == 0 || lisArr[lisArr.length-1] < envelopes[itr]) {
           lisArr.push(envelopes[itr]);
        } else {
            let lowerBound = lower_bound(lisArr, 0, lisArr.length, envelopes[itr]);
            lisArr[lowerBound] = envelopes[itr];
        }
    }
    
    return lisArr.length;
};
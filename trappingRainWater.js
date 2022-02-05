/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let max = 0;
    let prefix = [];
    for(let itr =0; itr <height.length; itr++){
        prefix.push(max);
        max = Math.max(height[itr], max);
    }
    max = 0;
    let suffix = [];
    for(let itr = height.length-1; itr >= 0; itr--){
        suffix[itr] = max;
        max = Math.max(height[itr], max);
    }
    let result = 0;
    for(let itr = 0; itr < height.length; itr++) {
        let value = Math.min(prefix[itr], suffix[itr]) - height[itr];
        if(value>0){
            result+=value; 
        }
    }
    return result;
};
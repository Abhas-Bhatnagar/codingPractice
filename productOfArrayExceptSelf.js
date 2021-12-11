var productExceptSelf = function(nums) {
    let outputArr = [], product = 1;
    
    for(let itr = 0; itr < nums.length; itr++) {
        product *= nums[itr];
        outputArr.push(product);
    }
    
    product = 1;
    for(let itr = nums.length - 1 ;  itr >= 1; itr--) {
        outputArr[itr] = product * outputArr[itr - 1];
        product *= nums[itr];
    }
    outputArr[0] = product;
    return outputArr;
};

//https://leetcode.com/problems/product-of-array-except-self/
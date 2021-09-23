var containsDuplicate = function(nums) {
    let hashMap = {};
    for(let itr = 0; itr < nums.length ; itr++) {
        !hashMap.hasOwnProperty(nums[itr])  && (hashMap[nums[itr]] = 0);
        hashMap[nums[itr]] += 1;
        if(hashMap[nums[itr]] > 1) return true;
    }
    console.log(hashMap);
    return false;
};


[1,2,3,1]
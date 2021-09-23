//https://leetcode.com/problems/fruit-into-baskets/submissions/

// optimized version v2
var totalFruit = function(arr) {
    let maxLength = 0;
    
    let rPointer = -1, lPointer = 0;
    let hashMap = {}, hashMapKeysCounter = 0;
    
    while(rPointer < arr.length - 1) { // <= 2
        rPointer++;
        let num = arr[rPointer];

        if(!hashMap.hasOwnProperty(num)) {
            hashMap[num] = 0;
            hashMapKeysCounter++;
        }
        hashMap[num]++;

        if(hashMapKeysCounter <= 2) {
            maxLength = Math.max(maxLength, rPointer - lPointer + 1);
        } 
        while(hashMapKeysCounter > 2) { // 0 <= 2
            let num = arr[lPointer];
            lPointer++;
            
            if(hashMap.hasOwnProperty(num)) {
                hashMap[num]--;
                if(hashMap[num] == 0) {
                    delete hashMap[num];
                    hashMapKeysCounter--;  
                }   
            }
            
        }
        
    }
    return maxLength;
};




// optimized version v2
var totalFruit = function(arr) {
    let maxLength = 0;
    
    let rPointer = -1, lPointer = 0;
    let hashMap = {}, hashMapKeysCounter = 0;
    
    while(rPointer < arr.length - 1) { // <= 2
        rPointer++;
        let num = arr[rPointer];

        if(!hashMap.hasOwnProperty(num)) {
            hashMap[num] = 0;
            hashMapKeysCounter++;
        }
        hashMap[num]++;

        if(hashMapKeysCounter <= 2) {
            maxLength = Math.max(maxLength, rPointer - lPointer + 1);
        } else {

            while(lPointer < rPointer) { // 0 <= 2
                let num = arr[lPointer];
                lPointer++;
                
                if(hashMap.hasOwnProperty(num)) {
                    hashMap[num]--;
                    if(hashMap[num] == 0) {
                        delete hashMap[num];
                        hashMapKeysCounter--;  
                    }   
                }
                if(hashMapKeysCounter <= 2) {
                    maxLength = Math.max(maxLength, rPointer - lPointer + 1);
                    break;                
                }
            }
        }
    }
    return maxLength;
};



// optimized version v1
var totalFruit = function(arr) {
    let maxLength = 0;
    
    let rPointer = -1, lPointer = 0;
    let hashMap = {}, hashMapKeysCounter = 0;
    while(rPointer < arr.length - 1) {
        while(rPointer < arr.length - 1) { // <= 2
            rPointer++;
            let num = arr[rPointer];

            if(!hashMap.hasOwnProperty(num)) {
                hashMap[num] = 0;
                hashMapKeysCounter++;
            }
            hashMap[num]++;
            
            if(hashMapKeysCounter > 2) {
                break;
            } else {
                maxLength = Math.max(maxLength, rPointer - lPointer + 1);
            }   
        }
        while(lPointer < rPointer) { // 0 <= 2
            let num = arr[lPointer];
            lPointer++;
            
            if(hashMap.hasOwnProperty(num)) {
                hashMap[num]--;
                if(hashMap[num] == 0) {
                    delete hashMap[num];
                    hashMapKeysCounter--;  
                }   
            }
            if(hashMapKeysCounter <= 2) {
                maxLength = Math.max(maxLength, rPointer - lPointer + 1);
                break;                
            }
        }
    }
    
    return maxLength;
};




// brute force solution 
var totalFruit = function(arr) {

    let maxLenght = 0;
    for(let outerItr = 0 ; outerItr < arr.length ;  outerItr++) {
        let mapper = {}, mapperKeysCounter = 0;
        for(let innerItr = outerItr; innerItr < arr.length; innerItr++) {
            let num = arr[innerItr];
            
            if(!mapper.hasOwnProperty(num)) {
                mapper[num] = 0;
                mapperKeysCounter++;
            } else {
                mapper[num] += 0;
            }
            if(mapperKeysCounter > 2) {
                break;
            }
            maxLenght =  Math.max(maxLenght,(innerItr - outerItr + 1));
        }
    }
    return maxLenght;
};























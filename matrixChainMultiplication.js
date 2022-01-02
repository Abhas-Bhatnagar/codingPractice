function minimumOperations(startIndex, endIndex, arr, hashMap) {
    // base cases
    if(startIndex == endIndex){
        return 0;
    }
    let hashKey = startIndex + "_" + endIndex;
    if(hashMap.hasOwnProperty(hashKey)) {return hashMap[hashKey];}
    let minOps = Infinity;
    for(let itr=startIndex+1; itr <= endIndex; itr++) {

        minOps = Math.min((
            minimumOperations(startIndex, itr-1, arr, hashMap) +
            minimumOperations(itr, endIndex, arr, hashMap) + 
            arr[startIndex] * arr[itr] * arr[endIndex+1]
        ), minOps);
    }
    // console.log(startIndex + "_" + endIndex +  "::" + minOps)
    return hashMap[hashKey]=minOps;
}
function main() {
    // ["matrix1", "matrix2", "matrix3", "matrix4"];
    let arr = [40, 20, 30, 10, 30];
    let hashMap = {};
    
    return minimumOperations(0, arr.length-2, arr, hashMap);
}
console.log(main());
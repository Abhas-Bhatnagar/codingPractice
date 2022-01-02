function minMoves(matrix, itrRow, itrCol, hashMap) {
    // console.log(itrRow + "_" + itrCol)
    // base cases
    if(itrRow >= matrix.length || itrCol >= matrix[0].length) {
        // console.log(itrRow + "_" + itrCol+ "::" + Infinity)
        return Infinity;
    }
    if(itrRow == matrix.length-1 && itrCol == matrix[0].length-1) {
        // console.log(itrRow + "_" + itrCol+ "::" + 0)
        return 0;
    }

    let hashkey = itrRow + "_" + itrCol;
    if(hashMap.hasOwnProperty(hashkey)) {
        return hashMap[hashkey];
    }

    let downwardMove = minMoves(matrix, itrRow + matrix[itrRow][itrCol], itrCol, hashMap);
    let upwardMove = minMoves(matrix, itrRow, itrCol + matrix[itrRow][itrCol], hashMap);
    // console.log(itrRow + "_" + itrCol+":downwardMove:"+downwardMove+ ":upwardMove:" + upwardMove)


    let moves = Math.min(downwardMove, upwardMove) + 1;
    hashMap[hashkey] = moves;
    // console.log(itrRow + "_" + itrCol+ "::moves::" + moves + ":downwardMove:"+downwardMove+ ":upwardMove:" + upwardMove)
    return hashMap[hashkey];
}
function solution(N, M, mat_val) {
    // Write your code here
    var result = 0;
    let hashMap = {};

    result =  minMoves(mat_val, 0, 0, hashMap);
    // console.log(hashMap)
    result = result == Infinity ? -1 : result;
    // console.log(result);

    return result;
}
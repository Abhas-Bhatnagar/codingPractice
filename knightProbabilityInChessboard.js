//CHESS BOARD
// 8 * 8
// position hoarse -> (rowItr, colItr) 
// nth move still in board


// eg:- 


//       (rowItr, colItr)

// (rowItr-2, colItr-1) (rowItr-2, colItr+1) // upward
// (rowItr+2, colItr-1) (rowItr+2, colItr+1) // downward


// (rowItr -1, colItr-2) ( rowItr+1 , colItr -2) // left
// (rowItr -1, colItr+2) ( rowItr+1 , colItr +2) // right

function calculatePaths(matrixSize, rowItr, colItr, hashmap, nthMove) {
    // base cases
    if(rowItr < 0 || rowItr >= matrixSize || colItr < 0 ||  colItr >= matrixSize) return 0;

    if(nthMove == 0) return 1;

    let hashKey = rowItr + "_" + colItr + "_" + nthMove;
    // if(hashmap.hasOwnProperty(hashKey)) return hashmap[hashKey];

    let possibleMovesArr = [];
    possibleMovesArr.push(calculatePaths(matrixSize, rowItr-2, colItr-1, hashmap, nthMove - 1)); // upward - left 
    possibleMovesArr.push(calculatePaths(matrixSize, rowItr-2, colItr+1, hashmap, nthMove - 1)); // upward - right

    possibleMovesArr.push(calculatePaths(matrixSize, rowItr+2, colItr-1, hashmap, nthMove - 1)); // downward - left 
    possibleMovesArr.push(calculatePaths(matrixSize, rowItr+2, colItr+1, hashmap, nthMove - 1)); // downward - right

    possibleMovesArr.push(calculatePaths(matrixSize, rowItr-1, colItr-2, hashmap, nthMove - 1)); // left - upward 
    possibleMovesArr.push(calculatePaths(matrixSize, rowItr+1, colItr-2, hashmap, nthMove - 1)); // left - downward

    possibleMovesArr.push(calculatePaths(matrixSize, rowItr-1, colItr+2, hashmap, nthMove - 1)); // right - upward 
    possibleMovesArr.push(calculatePaths(matrixSize, rowItr+1, colItr+2, hashmap, nthMove - 1)); // right - downward

    
    let favourablePaths = 0;
    console.log("possibleMovesArr"+possibleMovesArr)
    for(let itr =0 ; itr < possibleMovesArr.length ; itr++) {
        favourablePaths += possibleMovesArr[itr];
    }
    console.log("possibleMovesArr:"+possibleMovesArr)
    console.log("favourablePaths:"+favourablePaths)

    hashmap[hashKey] = favourablePaths/(8)
    return hashmap[hashKey]
}


// (6, 7)
// 

function main() {
    let matrixSize = 4;
    let positionX = 2, postionY= 1;
    let nthMove = 3;
    
    let hashmap = {};
    let probability = calculatePaths(matrixSize, positionX, postionY, hashmap, nthMove);
    
    probability = Math.round(probability * 10e6) / 10e6
    
    return probability;
}
console.log("main:"+main())
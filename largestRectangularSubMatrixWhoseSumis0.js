function largestRect(matrix) {
    
    let prefixMatrix = [];
    for(let itrRow =0 ; itrRow < matrix.length; itrRow++) {
        prefixMatrix[itrRow] = [];
        for(let itrCol = 0; itrCol < matrix[0].length; itrCol++){
            if(itrCol == 0){
                prefixMatrix[itrRow][itrCol] = matrix[itrRow][itrCol];
            } else {
                prefixMatrix[itrRow][itrCol] = prefixMatrix[itrRow][itrCol-1] + matrix[itrRow][itrCol];
            }
        }
    }
    console.log(prefixMatrix)
    let maxAreaSumZero = 0, left,right, top, down;
    for (let itrLeft = 0; itrLeft < matrix[0].length; itrLeft++) {
        
        for (let itrRight = itrLeft; itrRight < matrix[0].length; itrRight++) {

            let prefixSumDownward = 0, hashMap = {};
            let maxVerticalLengthSumZero = 0, horizontalLength = itrRight - itrLeft + 1;
            // vertically - downward loop
            for(let itrDownward = 0; itrDownward < matrix.length; itrDownward++){

                let value = prefixMatrix[itrDownward][itrRight] - prefixMatrix[itrDownward][itrLeft] + matrix[itrDownward][itrLeft];

                prefixSumDownward += value;
                if(prefixSumDownward == 0) {
                    if (maxVerticalLengthSumZero < (itrDownward - 0 + 1)) {
                        maxVerticalLengthSumZero = itrDownward - 0 + 1;
                        top = 0, down = itrDownward;
                    }
                    
                } else if (hashMap.hasOwnProperty(prefixSumDownward)) {
                    if( maxVerticalLengthSumZero < (itrDownward - (hashMap[prefixSumDownward] + 1) - 1) ) {
                        maxVerticalLengthSumZero = itrDownward - (hashMap[prefixSumDownward] + 1) - 1;
                        top = (hashMap[prefixSumDownward] + 1), down = itrDownward;    
                    }
                } 
                if(!hashMap.hasOwnProperty(prefixSumDownward)) {
                    hashMap[prefixSumDownward] = itrDownward;
                }
            }
            let tmpArea = maxVerticalLengthSumZero * horizontalLength;
            if( maxAreaSumZero < tmpArea) {
                maxAreaSumZero = tmpArea;
                left = itrLeft, right = itrRight;
            }
        }
    }
    console.log("left "+left+"  right"+right)
    console.log("top  "+top+"   down"+down);

    let printSubMatrix = [];
    for(let itrRow = top; itrRow <= down ; itrRow++){
        printSubMatrix.push([]);
        for(let itrCol = left; itrCol <= right ; itrCol++){
            printSubMatrix[printSubMatrix.length-1].push(matrix[itrRow][itrCol]);
        }
    }
    console.log(printSubMatrix);
}

let testCases = [
    [
        [9,  7, 16,  5],
        [1, -6, -7,  3],        
        [1,  8,  7,  9],          
        [7, -2,  0, 10],
    ],
    [
        [1,  2,  3],
        [-3, -2, -1],          
        [1,  7,  5]
    ]
];
largestRect(testCases[1])


// [
//     [9, 16,  32,  37],
//     [1, -5, -12,  -9],
//     [1,  9,  16,  25],
//     [7,  5,  5,   15]
// ]

// [
//     [9, 16,  23,  37],
//     [1, -5, -13,  -9],
//     [1,  9,  15,  25],
//     [7,  5,  -2,   15]
// ]

function minRooms(A) {
    let startArr = A.map((row)=>{return row[0]}).sort((a,b)=>{return a-b});
    let depArr = A.map((row)=>{return row[1]}).sort((a,b)=>{return a-b});

    console.log(startArr);
    console.log(depArr);
    let roomsCount = 0, maxRoomsCount = 0, startIndex = 0, depIndex = 0;

    while(startIndex < startArr.length && depIndex < depArr.length) {  
        console.log(startArr[startIndex]+"_"+depArr[depIndex])

        if(startArr[startIndex] < depArr[depIndex]){
            roomsCount++;
            startIndex++;
        } else {
            roomsCount--;
            depIndex++;
        }
        

        maxRoomsCount = Math.max(maxRoomsCount, roomsCount);
    }
    console.log(maxRoomsCount)
    return maxRoomsCount;
}
let testCase = [
    [
        [0, 30],
        [5, 10],
        [15, 20]
    ],
    [
        [1, 18],
        [18, 23],
        [15, 29],
        [4, 15],
        [2, 11],
        [5, 13]
    ],
    [
        [0, 14],
        [6, 25],
        [12, 19],
        [13, 19],
        [5, 9]
    ],
    [
        [7, 10],
        [4, 19],
        [19, 26],
        [14, 16],
        [13, 18],
        [16, 21]
    ]
]
minRooms(testCase[3]);
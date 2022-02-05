/**
 * @param {number[][]} grid
 * @return {number}
 */
function traverseNeigh(grid, coordinate, tmpAueueArr) {
    let itrRow = coordinate[0], itrCol = coordinate[1];
    let directions = [ [-1, 0], [1,  0], [0, -1], [0,  1] ];
    for(let itr = 0; itr < directions.length; itr++) {
        let newItrRow = itrRow+directions[itr][0];
        let newItrCol = itrCol+directions[itr][1];
        if( newItrRow < 0 || newItrRow >= grid.length || newItrCol < 0 || newItrCol >= grid[0].length ) {
            continue;
        }
        if(grid[newItrRow][newItrCol] != 1) {
            continue;
        }
        grid[newItrRow][newItrCol] = 2;
        tmpAueueArr.push([newItrRow, newItrCol]);
    }
    
}
function bfs(grid, queueArr) {
    let numberOfDays = 0;
    while(queueArr.length){
        //console.log(queueArr)
        let tmpAueueArr = [];
        for(let itr = 0; itr < queueArr.length; itr++) {
            let nodeCoordinate = queueArr[itr];
            traverseNeigh(grid, nodeCoordinate, tmpAueueArr);
        }
        queueArr = tmpAueueArr;
        numberOfDays++;
    }
    return numberOfDays >= 1 ? numberOfDays-1 : 0;
}
var orangesRotting = function(grid) {
    let queueArr = [];
    for(let itrRow = 0; itrRow < grid.length; itrRow++) {
        for(let itrCol = 0; itrCol < grid[0].length; itrCol++) {
            if(grid[itrRow][itrCol] == 2) {
                queueArr.push([itrRow, itrCol]);
            }
        }
    }
    let numberOfDays = bfs(grid, queueArr);
    for(let itrRow = 0; itrRow < grid.length; itrRow++) {
        for(let itrCol = 0; itrCol < grid[0].length; itrCol++) {
            if(grid[itrRow][itrCol] == 1) {
                return -1;
            }
        }
    }
    return numberOfDays;
};
//https://leetcode.com/problems/rotting-oranges/
//              (0,0)
// (-1,0)   (0,1)   (1,0)   (0,-1)

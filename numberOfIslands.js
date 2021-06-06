var numIslands = function(grid) {
    let matrix = [];
    console.log(grid)
    for(let itrR = 0 ; itrR < grid.length ; itrR++ ) {
        let tempArr = [];
        for(let itrC = 0; itrC < grid[itrR].length ; itrC++) {
            tempArr.push(0);
        }
        matrix.push(tempArr);
    }
    let counter = 0;
    for(let itrR = 0 ; itrR < grid.length ; itrR++ ) { 
        for(let itrC = 0; itrC < grid[itrR].length ; itrC++) { 
            if(grid[itrR][itrC] == "1" && !matrix[itrR][itrC]) {
                dfs(itrR, itrC, grid, matrix);
                counter++;
            }
        }
    }
    console.log(matrix)
    console.log(counter)
    return counter;
};
function dfs(x, y , grid, matrix) {
    if(y < 0 || y >= grid[0].length || x < 0 || x >= grid.length) {
        return;
    }
    console.log(x, y , grid, matrix)
    if(grid[x][y] == "0" || matrix[x][y]) {
        return;
    }
    matrix[x][y] = 1;

    dfs(x - 1 , y , grid, matrix);
    dfs(x , y + 1 , grid, matrix);
    dfs(x + 1 , y , grid, matrix);
    dfs(x , y - 1 , grid, matrix);
}
let dataSet = [
    [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
    ],
    [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ]
]
numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
])
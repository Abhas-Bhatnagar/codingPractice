let mapper = {};
var uniquePaths = function(obstacleGrid) {
    mapper = {};
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let uniPaths = dfs(0, 0, m-1, n-1, obstacleGrid);
    console.log(uniPaths);
    return uniPaths;
};


function dfs(sX, sY, dX, dY, obstacleGrid){
    if(sX < 0 || sX > dX || sY < 0 || sY > dY) {
        return 0;
    }
    if(obstacleGrid[sX][sY]) {
        return 0;
    }
    if(sX == dX && sY == dY) {
        return 1;
    }
    let right;
    if(mapper.hasOwnProperty((sX+1)+"_"+sY)){
        right = mapper[(sX+1)+"_"+sY];
    } else {
        right = dfs(sX+1, sY, dX, dY, obstacleGrid);
        mapper[(sX+1)+"_"+sY] = right;
    }
    let down;
    if(mapper.hasOwnProperty(sX +"_"+ (sY+1))){
        down = mapper[sX +"_"+ (sY+1)];
    } else {
        down = dfs(sX, sY+1, dX, dY, obstacleGrid);
        mapper[sX +"_"+ (sY+1)] = down;
    }
    return ( right + down );
}

uniquePaths([[0,1],[0,0]]);
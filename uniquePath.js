let mapper = {};
var uniquePaths = function(m, n) {
    mapper = {};
    let uniPaths = dfs(0, 0, m-1, n-1);
    console.log(uniPaths);
};


function dfs(sX, sY, dX, dY){
    console.log(sX, sY, dX, dY);
    if(sX == dX && sY == dY) {
        return 1;
    }
    if(sX < 0 || sX > dX || sY < 0 || sY > dY) {
        return 0;
    }
    let right;
    if(mapper.hasOwnProperty((sX+1)+"_"+sY)){
        right = mapper[(sX+1)+"_"+sY];
    } else {
        right = dfs(sX+1, sY, dX, dY);
        mapper[(sX+1)+"_"+sY] = right;
    }
    let down;
    if(mapper.hasOwnProperty(sX +"_"+ (sY+1))){
        down = mapper[sX +"_"+ (sY+1)];
    } else {
        down = dfs(sX, sY+1, dX, dY);
        mapper[sX +"_"+ (sY+1)] = down;
    }
    return ( right + down );
}

uniquePaths(3,7)
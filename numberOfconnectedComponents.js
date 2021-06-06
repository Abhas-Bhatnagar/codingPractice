var numOfConnectedComp = function (edgesArr) {
    let adjencyMap = {};
    for(let itr = 0 ; itr < edgesArr.length; itr++) {
        let startNode = edgesArr[itr][0];
        let endNode = edgesArr[itr][1];

        !adjencyMap[startNode] && (adjencyMap[startNode] = []);
        adjencyMap[startNode].push(endNode);
        !adjencyMap[endNode] && (adjencyMap[endNode] = []);
        adjencyMap[endNode].push(startNode);
    }
    for (const node in adjencyMap) {
        for(let itr = 0 ; itr < adjencyMap[node].length ; itr++) {
            adjencyMap[node] = adjencyMap[node].concat(adjencyMap[adjencyMap[node][itr]]);
            adjencyMap[node] = [...new Set(adjencyMap[node])];
        }
    }
    let unvisitedMap = {}, stack = [];
    let counter = 0;
    for (const node in adjencyMap) {
        if(!unvisitedMap[node]) {
            dfs(node, adjencyMap, unvisitedMap, stack);
            counter++;
        }
    }
    console.log(adjencyMap)
    console.log(counter)
}

function dfs(node, adjencyMap, unvisitedMap, stack) {
    if(unvisitedMap[node]) { 
        return;
    }
    unvisitedMap[node] = true;
    stack = stack.concat(adjencyMap[node]);
    while(stack.length != 0 ) {
        let ele = stack.pop();
        dfs(ele, adjencyMap, unvisitedMap, stack)
    }

    return;
}
let dataSet = [
    [
        [1,5],
        [0,2],
        [2,4],
        [3,6]
    ],
    [
        [1,2],
        [4,5],
        [3,6]
    ],
    [
        [6, 11],
        [5, 9],
        [13, 15],
        [12, 14],
        [1, 16],
        [15, 16],
        [9,15],
        [11,9]
    ]
];
numOfConnectedComp(dataSet[2])
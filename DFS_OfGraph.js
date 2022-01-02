function dfsTravsesal(V, adj, visited, traversalNodes, printArr){    
    while(traversalNodes.length) {
        let currentNode = traversalNodes.pop();
        printArr.push(currentNode);
        visited[currentNode] = 1;
        
        for(let itrAdjNodes = 0; itrAdjNodes < adj[currentNode].length; itrAdjNodes++) {
            let nodeToBeVisited = adj[currentNode][itrAdjNodes];
            if(visited[nodeToBeVisited]) continue;
            traversalNodes.push(nodeToBeVisited);       
        }
    }
    
}
function dfsOfGraph(V, adj) {
    // code here
    let visitedArr = [], traversalNodes = [], printArr = [];
    for(let itr =0 ; itr < V; itr++) {
        visitedArr[itr] = 0;
    }
    traversalNodes = [0];
    
    for(let itr =0; itr < V; itr++) {
        if(!visitedArr[itr]) {
            dfsTravsesal(V, adj, visitedArr, traversalNodes, printArr)
        }
    }
    return printArr;
}
function main() {
    let v = 5;
    let adj = {
        0 : [1,2,4],
        1: [0],
        2: [0],
        4: [0,3],
        3: [4]
    }
    console.log(dfsOfGraph(v, adj))
}
main();
//https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1#
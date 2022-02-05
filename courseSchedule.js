/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    let indegreeMap = {};
    let adjListMap = {};
    for(let itr = 0; itr < prerequisites.length; itr++) {
        !adjListMap.hasOwnProperty(prerequisites[itr][1]) && (adjListMap[prerequisites[itr][1]] = []);
        adjListMap[prerequisites[itr][1]].push(prerequisites[itr][0]);
        
        
        !indegreeMap.hasOwnProperty(prerequisites[itr][0]) && (indegreeMap[prerequisites[itr][0]] = 0);
        indegreeMap[prerequisites[itr][0]]++;
    }
    
    let queue = [];
    for(let itr = 0; itr < numCourses; itr++) {
        if(!indegreeMap.hasOwnProperty(itr)) {
            queue.push(itr);
        }
    }
    // console.log(adjListMap)
    // console.log(indegreeMap);
    // console.log(queue)
    while(queue.length){
        let node = queue.shift();
        numCourses--;
       
        // print
        for(let adjNodeItr = 0; adjNodeItr < (adjListMap.hasOwnProperty(node) ? adjListMap[node].length : -1); adjNodeItr++) {
            let adjNode = adjListMap[node][adjNodeItr]
            indegreeMap[adjNode]--;
            if(indegreeMap[adjNode] == 0) {
               queue.push(adjNode);
            }
        }
    }
    
    return numCourses == 0;
    
    
};
//https://leetcode.com/problems/course-schedule/
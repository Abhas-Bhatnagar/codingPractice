/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
function rodCut(cuts, interval, hashmap) {
    // base cases
    let  minimumCost = Infinity;
    let cost = interval[1] - interval[0];
    let hashKey = interval[0]+"_"+interval[1];
    if(hashmap.hasOwnProperty(hashKey)) return hashmap[hashKey];
    for(let itr = 0; itr < cuts.length ; itr++) {
        let cut = cuts[itr];
        if(interval[0] < cut && cut < interval[1]) {
            let costAfterCut = rodCut(cuts, [interval[0], cut], hashmap) + rodCut(cuts, [cut, interval[1]], hashmap);
            minimumCost = Math.min(minimumCost , costAfterCut)   
        }
    }
    minimumCost += cost;
    minimumCost = minimumCost == Infinity ? 0 : minimumCost;
    hashmap[hashKey] = minimumCost;
    return hashmap[hashKey];
}
var minCost = function(n, cuts) {
    let hashmap = {};
   return rodCut(cuts, [0, n], hashmap);
};

//https://leetcode.com/problems/minimum-cost-to-cut-a-stick/
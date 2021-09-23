function getIndex(currentIndex, daysPassed, days){
    let dayCame = days[currentIndex] + daysPassed;
    if(dayCame > days[days.length-1]) {
        return days.length;
    }
    for(let itr = currentIndex+1 ; itr < days.length; itr++ ) {
           if(dayCame <= days[itr]) {
               return itr;
           }
    }
    return days.length;
}

function getMinCost(index, days, costs, dp){
    if(index >= days.length) return 0;
    
    if(dp.hasOwnProperty(index)) return dp[index];
    
    let index1 = getIndex(index , 7 , days);
    let index2 = getIndex(index , 30, days);
    
    let minCosts = Math.min(
        (costs[0] + getMinCost(index+1, days, costs, dp) ),
        (costs[1] + getMinCost(index1 , days, costs, dp) ),
        (costs[2] + getMinCost(index2 , days, costs, dp) )
    );
    
    dp[index] = minCosts;
    
    return dp[index];
}
var mincostTickets = function(days, costs) {
    let dp = {};
    return getMinCost(0, days, costs, dp);
};


// https://leetcode.com/problems/minimum-cost-for-tickets/
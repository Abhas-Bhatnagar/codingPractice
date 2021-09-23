var coinChange = function(coins, amount) {
    let dp = {};
    let minCoins =  getMinCoins(0, amount, coins, dp);
    return minCoins >= 10e4+1 ? -1 : minCoins;
};


function getMinCoins(index, amount, coins, dp) {
    let  min = 10e4+1;
    
    if(amount == 0 ) return dp[amount] = 0;
    if (index >= coins.length || amount < 0) return min;  
    
    if(dp.hasOwnProperty(amount)) return dp[amount];

    for(let itr=0; itr < coins.length ; itr++) {
        if (amount >= coins[itr]) {
            min = Math.min(min, 
                      getMinCoins(itr, amount - coins[itr] , coins, dp)
                      );    
        }
        
    }
    min += 1;
    
    dp[amount] = min;
    return dp[amount];
    
}
// https://leetcode.com/problems/coin-change/
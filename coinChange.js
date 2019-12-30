function getCoins(i, j, amount, coins, arr, sumArr) {
    if (amount == 0) {
        return arr;
    } else if (amount >= coins[i-1]) {
        if (sumArr[i][amount - coins[i-1]]) {
            amount -= coins[i-1];
            arr.push(coins[i-1]);
            return getCoins(i,amount,amount,coins,arr, sumArr);    
        } else {
            return getCoins(i-1,amount,amount,coins,arr, sumArr);    
        }
        
    } else {
        return getCoins(i-1,amount,amount,coins,arr, sumArr);
    }
}

var coinChange = function (coins, amount) {
    let sumArr = [];
    for (let elemItr = 0; elemItr <= coins.length; elemItr++) {
        sumArr[elemItr] = [];
        for (let sum = 0; sum <= amount; sum++) {
            if (sum == 0) {
                sumArr[elemItr].push(true);
            } else if (elemItr == 0) {
                sumArr[elemItr].push(false);
            } else {
                let coin = coins[elemItr - 1];
                if (sum - coin == 0 || sumArr[elemItr][sum - coin]) {
                    sumArr[elemItr].push(true);
                } else if (sumArr[elemItr-1][sum]) {
                    sumArr[elemItr].push(true);
                } else {
                    sumArr[elemItr].push(false);
                }
            }
        }
    }
    console.table(sumArr);
    let flagSum = false, sum = amount;
    let i,j;
    for(itr = sumArr.length-1; itr >=0 ; itr--){
        if (sumArr[itr][amount]) {
            flagSum = true;
            i = itr;
            j = amount;
            break;
        }
    }
    if (!flagSum) {
        return -1;
    }
    let elementArr = [];
    return getCoins(i, j, amount, coins, elementArr, sumArr);
};
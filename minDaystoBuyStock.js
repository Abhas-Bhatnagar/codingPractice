/**
 * 
 * @param {*} targetPrice 
 * @param {*} currentPrice 
 * @returns 
 */
function minDays(targetPrice, currentPrice) {
    if (targetPrice == currentPrice ) return 0;

    if (targetPrice < currentPrice) {
        return minDays(targetPrice, currentPrice-1)+1;
    } else {
        if (targetPrice >= currentPrice * 2) {
            return minDays(targetPrice, currentPrice*2)+1;
        } else {
            return minDays(targetPrice, currentPrice-1)+1;
        }
    }
}
let minDay = minDays(14, 10);
console.log(minDay)


/**
 * 
 * @param {*} targetPrice : 1   14
 * @param {*} currentPrice: 10  10
 * @returns                 9   
 */
function calculateStairs(n) {
    if(n < 0) {
        return 0;
    }
    if(n == 0) {
        return 1;
    }
    let oneCal = calculateStairs(n-1);
    let twoCal = calculateStairs(n-2);
    // let threeCal = calculateStairs(n-3);
    return (oneCal + twoCal);
}
console.log(calculateStairs(5))

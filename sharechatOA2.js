//https://leetcode.com/discuss/interview-question/370770/postman-hackerearth-software-engineering-intern-bengaluru-india
let laptopPricesAndRating = [
    // [price, rating]
]
let usersBudgetsQueries = [
    // [priceLowerBound, priceUpperBound] // price range
];

// laptopPricesAndRating = [
//     [10, 3],
//     [15, 5]
// ]
// usersBudgetsQueries = [
//     [10, 15],
//     [11, 15],
//     [10, 14]
// ]

laptopPricesAndRating = [
    [1000, 300],
    [1100, 400],
    [1300, 200],
    [1700, 500],
    [2000, 600]
]
usersBudgetsQueries = [
    [1000, 1400],
    [1700, 1900],
    [0, 2000]
]

// brute force
function approach1(laptopPricesAndRating, usersBudgetsQueries) {
    console.log(laptopPricesAndRating)
    console.log(usersBudgetsQueries)
    let ratingArr = [];
    for(let itr = 0; itr < usersBudgetsQueries.length; itr++) {
        let userPriceRange = usersBudgetsQueries[itr];
        let maxRating = -1;
        for(let itrLaptop =0; itrLaptop < laptopPricesAndRating.length; itrLaptop++) {
            let price = laptopPricesAndRating[itrLaptop][0];
            let rating = laptopPricesAndRating[itrLaptop][1];
            if(price >= userPriceRange[0] && price <= userPriceRange[1]) {
                maxRating = Math.max(maxRating, rating);
            }
        }
        ratingArr.push(maxRating);
    }
    return ratingArr;
}

console.log(approach1(laptopPricesAndRating, usersBudgetsQueries))
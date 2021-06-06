Response
{
    respsI : "mongoId",
    qId : "",
    ans : [
        {value :  2}
    ]
}
{
    respsI : "mongoId",
    qId : "",
    ans : [
        {value :  1}
    ]
}

/////////////////////
16 Mb
{
    [
        {id : 1}.{ id : 2}
    ]
}


Gold price of next n days is given, maximize the profit of buying & selling. 
action you can do on a day:

1. buy one gold(1 unit)
2. sell one(1 unit) or more(more than 1 unit) gold 
3. hold on the day. (skip)
// Assumptions
// -ve not there -> xx
// initial -> []
// operations on day -> 
// array price per unit
// enough money
//[10, 20 , 5, 40 ] => 3 * 40 - 10 - 20 - 5
//[10 , 20 , 5 , 2] => 
//[10 , 20  , 40 ] 
// max array
//[40, 40 , 40, 40]
// max array
// [20, 20  , 5 , 2]
// [40, 40, 40 ]
// goldPrices = [ ]
function maxProfit(goldPrices) {
    if( !(goldPrices.length == 0) || goldPrices.length == 1) return 0; // profilt is zero
    let length = goldPrices.length - 1;
    let totalProfilt = 0, maxPointer = goldPrices[length];
    for(let itr = length; itr >= 0 ; itr-- ) {
        let price = goldPrices[itr];
        maxPointer = maxPointer > price ? maxPointer : price;
        if(maxPointer > price) { // sell the units of gold case
            totalProfilt += maxPointer - price;
        }  
        // equal or (price is large) => shold the unit 
    }
    return totalProfilt;
}
// time complexity O(N) // space => O(1)
// cases 1 => [ 40, 30 , 20 , 10 ] =>  profit = 0 
// case 2 =>  [10, 20 , 5, 40 ]
// case 3=> [] =>  profit = 0 
// case 4 => [20] =>  profit = 0 


Identify the shortest distanced between duplicate nodes in the tree.


             5
           /  \
          6    3
        /  \    \       
       2    10   2
           /  \
          8    7
           \
            6        
given root
output : 
6 node , 3 dis
// timeCOmplexity O(N)
let hashMap = {};
hashMap[node.data] = {
    freq: 2,
    address :  
}
////////////////////////
traverse first shortest first distance -> distance O(V)
pair(5,2)=> 2
pair(5,2)=> 2
space O(4 * Nodes)
co
/////
root to node pare 1
root to node pare 2

time complexity => O(V) ==>all vertices
Space complexity ==> 
O(Depth of tree) => O(V) skeewed or if tree is balanced 3  => 1 ,, 7 => 2
    //log base2 (V+1) - 1 

pair(5,6) => 5 , 6
pair(5,6) => 5 , 6 , 10 , 8 , 6 


[
    {
        query 1
    },
    {
        query2 2
    },
    {

    },
    {

    }
]
///////////////////////////
16 MB
{
    arr : [
        {} ,{} 
    ]
}
//////////////////////////
{

},
{

}



//A man is walking up a set of stairs. He can either take 1, 2 or 3 steps at a time. 
//Given n number of stairs, find out how many combinations of steps he can take to reach the top of the stairs.
// n = 5 

// 3, 2 or 2, 3 or 

// n = 4 

n = 1
1
f(1) = 1
n = 2
1,1 or 2 -> f(2) = 2

n = 3
1,1,1 or 1,2 or 2,1 or 3
f(3) = 4

n = 4
f(4-1) + f(1)  +
f(4-2) + f(2) +
f(4-3) + f(3)

 
n = 5

f(n-1) + f(n-2) + f(n-3)



// 1, 3 or 3, 1 
// 1, 1, 1, 1 or 1, 1, 2, or 2, 1, 1, or 2, 2
// 6

// n = 3
// 1,1,1 or 1, 2 or 2, 1 or 3
// 4

// n = 2
// 1, 1 or 2
// 2

// n =  1
// 1 

// stepValue == n value
    table[row][col] = table[row][col-1] +1
// step value >  n vlaue
    table[row][col] = table[row][col-1]
// 

space O(N values)(steps values)
time O(N values)(steps values)

sn = 4
steps = {1, 2, 3}
O(4*3)

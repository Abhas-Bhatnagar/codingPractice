let element, sum;
if(element == sum) {
    table[row][col] = table[row][col - 1] + 1
} else if (element > sum) {
    table[row][col] = table[row][col - 1]
} else if (element < sum) {
    table[row][col] = 1
}



3
1,1,1
1,2
2,1

2
1,1
2


function min(num1, num2) {
    if (num1 == null && num2 != null) {
        return num2;
    } else if (num1 != null && num2 == null) {
        return num1;
    } else {
        return num1 >= num2 ? num2 : num1;
    }
}

function minimumCostForShopping(matrix) {

    let minimum = null;
    for (let itr = 0; itr < matrix[0].length; itr++) {
        minimum = min(minimum ,   minimumCost(matrix, 0 , itr) );        
    }
    
    return minimum;
}


function minimumCost(matrix, currentRow, currentCol) {
    

    let minimum = null;
    for (let itr = 0; itr < (matrix[currentRow + 1] && matrix[currentRow + 1].length); itr++) {
        if (currentCol != itr) {
            minimum = min(minimum , minimumCost(matrix, currentRow + 1 , itr) )
        }
    }
    minimum = minimum == null ? matrix[currentRow][currentCol] : (minimum + matrix[currentRow][currentCol]);
    return minimum;
}

console.log(minimumCostForShopping([
    [1 , 50 , 50],
    [50 , 50 , 50],
    [1 , 50 , 50]
]))


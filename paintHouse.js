export class Solution {

  /**
   * minCost
   *
   * @param costs: n x 3 cost matrix
   * @return: An integer, the minimum cost to paint all houses
   */
  minCost(costs) {
    // write your code here
    let matrix = [];
    if(costs.length == 0 ) return 0;
    matrix[0]  = [...costs[0]];
    for(let itrCost = 1; itrCost < costs.length ; itrCost++) {
        matrix[itrCost] = [];
        for(let itrPaint = 0 ; itrPaint < costs[itrCost].length; itrPaint++) {
            let minCostPerHousePaint = Infinity;
            for(let itrPrevPaint = 0 ; itrPrevPaint < costs[itrCost].length; itrPrevPaint++) {
                if(itrPaint != itrPrevPaint) {
                    minCostPerHousePaint = Math.min(minCostPerHousePaint, matrix[itrCost-1][itrPrevPaint])
                }
            }
            matrix[itrCost][itrPaint] =  minCostPerHousePaint+costs[itrCost][itrPaint];
        }
    }
    let minCostPerHousePaint = Infinity;
    for(let itrPaint = 0 ; itrPaint < costs[0].length; itrPaint++) {
        minCostPerHousePaint = Math.min(matrix[matrix.length-1][itrPaint],minCostPerHousePaint)
    }
   // console.log(matrix)
    return minCostPerHousePaint;
  }
}
//https://www.interviewbit.com/problems/paint-house/
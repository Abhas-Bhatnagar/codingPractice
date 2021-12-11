// length is even let say 10
// median indexes 4 , 5
// length is odd let say 9
// median index 4

let arr1 = [1, 3, 4, 7, 10, 12]; 6
let arr2 = [2, 3, 6, 15]; 4

// even case 
// cut1  indexes possible values -1 to 4
// left1 Math.min(arr2)-1 to arr1[4]
// cut2 corresponding indexes possible values 4 to -1
// left2 Math.min(arr1)-1 to arr1[4]
[1,3]
[2]

function findMedianSortedArrays(arr1, arr2) {
    let totalLen = arr1.length + arr2.length;
    let evenFlag = totalLen % 2 == 0 ? 1 : 0;

    let medianIndexLeftArr = evenFlag ? totalLen/2 : Math.floor(totalLen/2);
    let start = -1, end = Math.min(medianIndexLeftArr, arr1.length - 1);

    while(start <= end){
        let cut1 = Math.floor((start + end) / 2); // -1 to 4
        let cut2 = Math.floor(totalLen/2) - (cut1 + 1) - 1; // 4 to -1

        let left1 = cut1 == -1 ? Math.min(arr2) - 1 : arr1[cut1];
        let left2 = cut2 == -1 ? Math.min(arr1) - 1 : arr2[cut2];

        let right1 = cut1 ==  arr1.lenth - 1 ?  Math.max(arr2): arr1[cut1+1]; 
        let right2 = cut2 ==  arr2.lenth - 1 ?  Math.max(arr1): arr1[cut2+1]; 

        if (left1 <= right2 && left2 <= right1 ) {
            if (evenFlag) {
                return (Math.max(left1,left2), Math.min(right1,right2))/2;
            } else {
                return Math.max(left1,left2);
            }
        } else if (left1 > right2) {
            end = cut1 -1;
        } else {
            start = cut1 +1;
        }
    }
    return 0;
}











// odd case 
// cut1  indexes possible values -1 to 4
// left1 Math.min(arr2)-1 to arr1[4]
// cut2 corresponding indexes possible values 4 to -1
// left2 Math.min(arr1)-1 to arr1[4]

var shortestCommonSupersequence = function (text1, text2) {
    let matrix = []; //  text1.length + 1

    for (let itrRow = 0; itrRow < text1.length + 1; itrRow++) {
        matrix[itrRow] = [];    // text2.length + 1
        matrix[itrRow].push(0);

        for (let itrCol = 1; itrCol < text2.length + 1; itrCol++) {
            if (itrRow == 0) {
                matrix[itrRow][itrCol] = 0;
            } else if (text1[itrRow - 1] == text2[itrCol - 1]) {
                matrix[itrRow][itrCol] = matrix[itrRow - 1][itrCol - 1] + 1;
            } else {
                matrix[itrRow][itrCol] = Math.max(matrix[itrRow - 1][itrCol], matrix[itrRow][itrCol - 1]);
            }
        }
    }

    //console.log(matrix)
    let itrRow = text1.length, itrCol = text2.length, index = matrix[text1.length][text2.length] - 1;
    let lcs_str = [];
    while (itrRow >= 1 && itrCol >= 1) {
        if (text1[itrRow - 1] == text2[itrCol - 1]) {
            lcs_str[index] = text1[itrRow - 1];
            index -= 1;
            itrRow -= 1; itrCol -= 1;
        } else if (matrix[itrRow - 1][itrCol] > matrix[itrRow][itrCol - 1]) {
            itrRow -= 1;
        } else {
            itrCol -= 1;
        }
    }
    lcs_str = lcs_str.join("");
    let itrStr1 = 0, itrStr2 = 0, itrStr = 0;
    let resultStr = "";
    for (let common_char of lcs_str) {
        while (text1[itrStr1] != common_char) {
            resultStr += text1[itrStr1++];
        }
        while (text2[itrStr2] != common_char) {
            resultStr += text2[itrStr2++];
        }
        // common char
        resultStr += common_char;
        itrStr1++; itrStr2++;

    }

    while (itrStr1 < text1.length) {
        resultStr += text1[itrStr1++];
    }

    while (itrStr2 < text2.length) {
        resultStr += text2[itrStr2++];
    }


    return resultStr;

};
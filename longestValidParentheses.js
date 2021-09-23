var longestValidParentheses = function(s) {
    let maxLength  = 0;
    
    // left to right 
    let left = 0 , right = 0;
    for (let itr = 0; itr < s.length; itr++) {
        let ch = s[itr];
        if (ch == "(") {
            left++;
        } else {
            right++;
        }
        if(right > left) { // "))))"
            left = 0;
            right = 0;
        } else if (left == right){
            maxLength = Math.max(maxLength , (left + right));
        }
    }

    // right to left
    for (let itr = s.length - 1; itr >= 0; itr--) {
        let ch = s[itr];
        if (ch == "(") {
            left++;
        } else {
            right++;
        }
        if(right < left) { // "(((("
            left = 0;
            right = 0;
        } else if (left == right){
            maxLength = Math.max(maxLength , (left + right));
        }
    }

    return maxLength;
};
let mapper = {}, counter = 0; 
let minStepsMapper = {};
function minSteps(num){
    !mapper[num] && (mapper[num] = 0);
    mapper[num]++;
    counter++;
    //console.log("num:"+num)
    if(num == 1) return 0;
    if (num % 2 == 0 ) {
        num /= 2;
        !minStepsMapper[num] && (minStepsMapper[num] = minSteps(num) + 1);
        return minStepsMapper[num];
    } else {
        if (minStepsMapper.hasOwnProperty(num)) {
            return minStepsMapper[num];
        } else {
            let left = minSteps(num - 1);
            let right = minSteps(num + 1);
            minStepsMapper[num] = Math.min(left, right) + 1 ;
            return minStepsMapper[num];    
        }
    }
}

let steps = minSteps(15);
console.log(steps)
console.log("counter", counter)
console.log(mapper)
//https://www.geeksforgeeks.org/reduce-a-number-to-1-by-performing-given-operations/
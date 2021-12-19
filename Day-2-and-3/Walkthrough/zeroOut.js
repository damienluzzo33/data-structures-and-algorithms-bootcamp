//?  MULTIPLE POINTERS

//*  Write a function called zeroOut which accepts a sorted array of integers. 
//*  The function should find the first pair where the sum is 0. 
//*  Return an array that includes both values that sum to zero or undefined if a pair does not exist.
//*  Test Cases: 
//*  zeroOut([-3, -2, -1, 0, 1, 2, 3]) returns [-3, 3]
//*  zeroOut([-2, -1, 0, 1, 2, 3]) returns [-2, 2]
//*  zeroOut([1, 2, 3]) returns undefined



//*  Naive Approach

function naiveZeroOut(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if(sum === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
    return undefined;
}


//* Better approach

function zeroOut() {

}

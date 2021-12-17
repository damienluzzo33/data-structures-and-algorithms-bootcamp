//*  Create a function called "maxSum" that accepts an two inputs: one that is an array of positive integers and a second one that is just an integer. The function should return the maximum sum of consecutive integers based on the second input that is passed in.

//*  Test Cases:
//*  maxSum( [50, 100, 150, 200, 250], 3 ) --> 600
//*  maxSum( [51, 12, 10, 16, 92], 4 ) --> 130
//*           
//*  maxSum( [1, 6, 10, 3, 5], 3 ) --> 19

//*  What is being asked here?
//*  What types of inputs are we using?
//*  Are there any edge cases we have to look out for?
//*  What should the output be?
//*  What are we keeping track of?
//*  Break it down, pseudo code it, and solve it

//* Naive solution

function naiveMaxSum(arr,num) {
    //* if the num of consecutive integers we are looking for is longer than the array, we return null because it would be impossible to calculate the sum of something that does not exist
    if (num > arr.length) return null;

    //* just in case we have negative numbers in our array, we want to make sure that the original "max" variable stores something that can be overridden by another negative number that could be large in magnitude
    var max = -Infinity;

    //* for our for loop condition, we need to make sure we stop iterating when we reach the end of the array with our defined range. This means instead of iterating to the end of the array, we iterate to the length minus the num.
    for (let i = 0; i <= arr.length - num; i++) {
        //* start our total at zero
        let current = 0;
        for (let j = 0; j < num; j++) {
            //* we add together all the integers in the range we are focused on
            current += arr[i + j];
        }
        if (current > max) {
            max = current;
        }
    }
    return max;
}

console.log(naiveMaxSum([50, 100, 150, 200, 250], 3))


//* let's say we have a huge array with one hundred digits and we want to check the consecutive sum of 20 numbers.

//* better solution

function maxSum(arr, num) {

}
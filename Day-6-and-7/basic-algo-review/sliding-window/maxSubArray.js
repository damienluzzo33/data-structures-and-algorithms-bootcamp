//?  SLIDING WINDOW

//*  Create a function called "maxSum" that accepts an two inputs: one that is an array of positive integers and a second one that is just an integer. The function should return the maximum sum of consecutive integers based on the second input that is passed in.

//*  Test Cases:
//*  maxSum( [50, 100, 150, 200, 250], 3 ) --> 600
//*  maxSum( [51, 12, 10, 16, 92], 4 ) --> 130
//*  maxSum( [1, 6, 10, 3, 5], 3 ) --> 19


//* Naive solution

function naiveMaxSum(arr, num) {
    // TODO: if the number of consecutive integers we are looking for is longer than the array, we return null because it would be impossible to calculate the sum of something that does not exist
    if () {

    }

    // TODO: if we have negative numbers in our array, we want to make sure that the original "max" variable stores something that can be overridden by another negative number that could be large in magnitude

    // TODO: iterate through the array until the end of the array with our defined range. This means instead of iterating to the end of the array, we iterate to the length minus the num.
    for () {
        
        // TODO: start our total at zero

        // TODO: loop through the input size of our subarray (num length)
        for () {
            // TODO:  add together all the integers in the range we are focused on

        }

        // TODO: if the current total is greater than the previous maximum, set maximum to be the current
        if () {
            
        }
    }
    // TODO: return the maximum total calculated
    
}

console.log(naiveMaxSum([50, 100, 150, 200, 250], 3))


//* let's say we have a huge array with one hundred digits and we want to check the consecutive sum of 20 numbers.

//* better solution

function maxSum(arr, num) {
    // TODO: set initial maximum sum to be negative infinity and declare currentSum
    
    // TODO: handle edge cases
    if () {

    }

    // TODO: loop over the first window and sum together consecutive values
    for () {
        
    }

    // TODO: set current sum to be the value of max

    // TODO: loop through the rest of the array starting the with index following the current window
    for () {

        // TODO: slide the window and update the current sum by 
        
        // TODO: set max to be the greater of the current sum and the maximum sum
        
    }

    // TODO: return the max sum
    
}
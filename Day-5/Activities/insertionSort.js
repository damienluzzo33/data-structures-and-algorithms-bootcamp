//? INSERTION SORT

//* Write a function that takes in an array and uses the insertion sort method to sort the array from smallest to biggest

//@ Hint #1: You will be swapping values, but you do not need to use the swapping helper function to do this

//@ Hint #2: this can be done using a while loop OR a nested for loop. 

//! CAUTION: If you are using a nested for loop, there may be scoping issues that develop depending how you plan to swap the values after the second for-loop has completed. Because of this, we recommend using the "var" keyword instead of "let" to define your inner loop variable (i.e. --> for (var j = ...; ...; ...))

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        // TODO: Create a variable called currentValue and assign it the value of the array at i

        // TODO: Create a nested for loop (easier) or a while loop (with an additional variable to create an variable "index tracker" called j)

        //! This part can be tricky! You want to decrement your looping from the value to the left of i until (and including) the 0 index 
        // var j = ... 
        // while () {}
        for () {
            // TODO: Check to see if the value at j is greater than the currentValue
            if () {
                // TODO: If it is, then we want to move that value to the right
            } else {
                // TODO: Otherwise break out of the loop
            }
        }
        // TODO: Now, j is either pointing to a negative index, or at a value that is less than the currentValue, so we want to put the current value back in the array FOLLOWING the index currently being pointed at
    }
    // TODO: Return the array
}

console.log(insertionSort([15,4,13,2,11]));
//* Expected Result: [2,4,11,13,15]

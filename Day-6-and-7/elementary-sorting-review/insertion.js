//? INSERTION SORT

//* Write a function that takes in an array and uses the insertion sort method to sort the array from smallest to biggest

function insertionSort(arr) {
    
    for (var i = 1; i < arr.length; i++) {
        // TODO: Create a variable called currentValue and assign it the value of the array at i

        // TODO: Create a nested for loop (easier) or a while loop (with an additional variable to create an variable "index tracker" called j) (Hint: we recommend using the "var" keyword instead of let here)
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

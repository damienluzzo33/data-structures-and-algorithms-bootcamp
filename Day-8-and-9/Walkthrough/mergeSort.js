//?  MERGE SORT

//*  Create a function called mergeSort that accepts an unsorted array of integers, which will return a sorted version of the array passed in. 

//* For the Main Function: Use divide-and-conquer to break up your array into smaller pieces, then recursively call it until the array has been broken up into subarrays with lengths of 0 or 1. Finally, call the helper function to merge the pieces back together in a sorted fashion.

//* For the Helper Function: Use multiple pointers (one on each subarray) to make comparisons and merge together and sort the values.

//* Hint: While loops are incredibly helpful with Merge Sort. Start by defining the helper function!


//* The Merge Helper Function

function mergeHelper(arr1, arr2) {

    // TODO: set up final result as an empty array to start, and set up our pointers

    // TODO: while the first pointer is less than the length of the first array and the second pointer is less than the length of the second array
    while () {

        // TODO: check to see if the value being pointed at in the first is less than the value being pointed at in the second
        if () {

            // TODO: if so, push the first value onto the result array and increment the first pointer
            
        // TODO: check to see if the opposite condition is true (including equality)
        } else if () {

            // TODO: if so, push the second value onto the result array and increment the second pointer
        
        }
    }

    // TODO: if we broke out of the previous loop, one of the pointers has run its course, so we figure out which one has and keep pushing remaining values from the subarray that still has un-pushed values in it
    while () {
    }

    while () {
    }

    // TODO: return the final sorted array
}


//* The Main Merge Sort Function

// TODO: create function that will break up our array into tiny arrays with lengths of 1 or 0 and then call our helper function to merge it all back together
function mergeSort(arr) {
    
    // TODO: set up edge case for lengths 1 or 0
    if () {

    }

    // TODO: find the mid point of the array
    
    // TODO: recursively call the mergeSort function on the "sliced" halves of the input array
    
    // TODO: call the mergeHelper function with the two halves we've shopped up and return the result
    
}

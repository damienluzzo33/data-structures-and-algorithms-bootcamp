//?  QUICK SORT

//*  Create a function called quickSort that accepts an unsorted array of integers, which will return a sorted version of the array passed in. 

//* For the Main Function: Use divide-and-conquer to break up your array into smaller pieces, call the helper function to find the pivot and rearrange the elements in the array, then recursively call the quickSort function until the array has been broken up into subarrays with lengths of 0 or 1. When the call stack finishes, the returned array should be sorted.

//* For the Pivot Helper Function: Use multiple pointers on the passed in array to make comparisons and rearrange elements based on how they compare to the value of the pivot point

//* Hint: Default parameters are helpful here! We recommend starting with the Pivot Helper Function!


//* Pivot Helper Function

function pivotHelper(arr, start=0, end=arr.length - 1) {
    // TODO: define the pivot variable and start it at the start, and then define the finalPivotIndex which will start at the start and increment based on the comparisons that take place
    
    // TODO: loop from the index following the pivot until the end of the array
    for () {

        // TODO: if the pivot value is greater than the value of the array currently being iterated
        if () {

            // TODO: increment the finalPivotIndex and swap the value currently being iterated with the new value of the finalPivotIndex

        }
    }

    // TODO: at the end, swap the value at the start of the array with the value at the finalPivotIndex

    // TODO: return the finalPivotIndex

}

//* Main Function

function quickSort(arr, left=0, right=arr.length-1) {
    // TODO: if the left index is still less than the right index
    if () {

        // TODO: find the pivot with the pivot helper function and store it in a variable
        
        // TODO: use that variable to pass the left side and the right side subarrays recursively into the quickSort function ensuring the pivot index itself is excluded
        
    }
    
    // TODO: return the sorted array
    
}


console.log(quickSort([13,9,11,3,7,5,15,1]));
//* Expected Result: [1,3,5,7,9,11,13,15]


//* Pivot Helper : O(n)
//* Decomposition : O(log n)

//* Quick Sort : O (n log n)

//* For the worst case scenario - an already sorted array OR a pivot that is the smallest value - O(n^2)

//* Can it be improved? Depends on the data... we could choose a middle value to avoid already sorted data issues, we could randomize it with no guarantee for improvement... just do what you like and stick to it
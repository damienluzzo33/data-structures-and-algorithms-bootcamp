//? BUBBLE SORT

//* Write a function that takes in an array and uses the bubble sort method to sort the array from smallest to biggest

//@ Hint: Use the swapping helpers that we just introduced

//*  let temp = arr[index1];
//*  arr[index1] = arr[index2];
//*  arr[index2] = temp;
//@  OR
//*  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];


//@ FIRST TRY THE SIMPLE APPROACH

function bubbleSort(arr) {
    // TODO: Create a loop that starts at the beginning of the array and loops to the end
    for (let i = 0; i < arr.length; i++) {
        // TODO: Create another loop that starts at the beginning and goes to the end
        
            // TODO: Inside the inner loop do comparisons to see how the current element compares to the next element, if the current is bigger than the next, swap the two elements
    }
    // TODO: return the sorted array 
}

//@ NOW TRY THE MORE OPTIMIZED APPROACH

function bubbleSortOptimized(arr) {
    //* Loop backwards starting at the value of the the array's length so that our inner loop 
    for (let i = arr.length - 1; i > 0; i--) {
        // TODO: Create a nested loop that iterates from j=0 to i
        for () {
            // TODO: Check to see if the value at j equals the value to the right
            if () {
                // TODO: If so, swap those two values
            }
        }
    }
    // TODO: return the sorted array
}

// TODO: BONUS: Can you further optimize the bubble sort to stop the outer loop from continuing if no swaps were conducted throughout the inner loop's iteration

console.log(bubbleSort([5,4,3,2,1]));
//* Expected Result: [1,2,3,4,5]


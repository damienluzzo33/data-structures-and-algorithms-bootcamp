//?  SLIDING WINDOW

//*  Write a function called "minSubArrayLength" that accepts an array of positive integers and a positive integer. The function should return the value of the length of a subarray whose sum is greater than or equal to the passed in integer. For this problem, we want to specifically return the shortest length subarray possible in the array that meets this condition. If there is no subarray that meets these conditions, then return 0 instead. 

//*  EXAMPLES:
//*  minSubArrayLength([1, 2, 5, 3, 7, 1, 3], 9) --> 2 (because [3,7] meets this condition)
//*  minSubArrayLength([5, 6, 1, 3, 4], 7) --> 2 (because [5,6] meets this condition)
//*  minSubArrayLength([1, 6, 11, 7, 9, 4, 5], 25) --> 3 (because [11,7,9] meets this condition)
//*  minSubArrayLength([11, 6, 2, 7, 15], 42) --> 0 (because no subarray meets this condition)


//* First Solution

function minSubArrayLen(arr, sum) {

    // TODO: start the running total at zero
    
    // TODO: set the window's edges on the same index at the beginning
	
    // TODO: set minimum length to start at infinity to guarantee a larger length is impossible

    // TODO: so long as the left side of our window is not greater that the length of the array, run a loop
	while () {
		
        // TODO: if the current window doesn't add up to the given sum and the right side of the window hasn't hit the end of the array
		if () {

            // TODO: increment the running total by the value currently at the right side of the sliding window
			
            // TODO: grow the window by moving the right side of the window further to right
			
        // TODO: else, if the running total is greater than or equal to the benchmark sum
		} else if () {

			// TODO: reassign minimumLength based on which is smaller, the current minimum length or the length of the window
            
            // TODO: decrement the running total by the value currently at the left side of the sliding window
			
            // TODO: shrink the window by moving the left side of the window to the right
			
        // TODO: else the running total is less than sum and we've reach the end of the array
		} else {

            // TODO: break out of loop
            
        }
	}

    // TODO: if the minimum length did not change, return 0
	if () {

    }
    // TODO: otherwise, return the recorded minimum length
    else {

    }
}

//* Alternative Solution

function minSubArrayLength(arr,sum) {

    // TODO: handle edge case
    if () {

    }

    // TODO: define window start and end points, the running total, and the starting minLength

    // TODO: while the start is pointing to an index on the array
    while () {

        // TODO: if the running total is greater than or equal to the sum
        if () {
            
            // TODO: save that length

            // TODO: find the minimum of the current and stored smallest length array

            // TODO: decrement the total and shrink the window 
            
        // TODO: else, if the total is less than the sum and the end pointer is still on the array
        } else if () {

            // TODO: increment the total and grow the window
            total += arr[end]
            end++;
        
        // TODO: otherwise, the end has gone past the array, and we need to break the loop
        } else {
        
        }
    }

    // TODO: if our initial minLength value didn't change, then there is no subarray that meets the condition
    if () {

    }
    // TODO: otherwise return the discovered minimum length subarray
    else {

    }
}

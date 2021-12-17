//?  SLIDING WINDOW

//*  Write a function called "minSubArrayLength" that accepts an array of positive integers and a positive integer. The function should return the value of the length of a subarray whose sum is greater than or equal to the passed in integer. For this problem, we want to specifically return the shortest length subarray possible in the array that meets this condition. 
//*  If there is no subarray that meets these conditions, then return 0 instead. 


//*  Test Cases:
//*  minSubArrayLength([1, 2, 5, 3, 7, 1, 3], 9) --> 2 (because [3,7] meets this condition)
//*  minSubArrayLength([5, 6, 1, 3, 4], 7) --> 2 (because [5,6] meets this condition)
//*  minSubArrayLength([1, 6, 11, 7, 9, 4, 5], 25) --> 3 (because [11,7,9] meets this condition)
//*  minSubArrayLength([11, 6, 2, 7, 15], 42) --> 0 (because no subarray meets this condition)


//*  HINT 1: start your window with the edges starting on the same index

//*  HINT 2: Use a while loop with a terminating condition that runs while the beginning index of the window is less that the length of the array

//*  HINT 3: You'll need to use an if, else if, else conditional that will grow, shrink, or break out of the loop based on specified conditions that will compare the value of the current "total" and the integer passed into the function


function minSubArrayLength(arr,sum) {

}


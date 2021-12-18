//?  SLIDING WINDOW

function maxSum(arr, num) {
    //* set initial maximum sum to be negative infinity and declare currentSum
    let max = -Infinity;
    let currentSum;

    //* edge cases
    if (arr.length < num) return null;

    //* loop over the first window and sum together consecutive values
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }
    //* set current sum to be the value of max
    currentSum = max;

    //* loop through the rest of the array starting the with index following the current window
    for (let i = num; i < arr.length; i++) {
        //* slide the window and update the current sum by 
        currentSum = currentSum - arr[i - num] + arr[i];
        //* set max to be the greater of the current sum and the maximum sum
        max = Math.max(max, currentSum);
    }
    //* return the max sum
    return max;
}

console.log(maxSum([2,3,4,5,3,14,11,2,3,10], 4))  
//* Expected output is 33
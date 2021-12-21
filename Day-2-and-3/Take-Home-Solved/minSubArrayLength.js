//?  SLIDING WINDOW

function minSubArrayLen(arr, sum) {
    //* start the running total at zero
    let total = 0;
    //* set the window edge on the same starting index
	let windowLeft = 0;
	let windowRight = 0;
    //* set minimum length to start at infinity to guarantee a larger length is impossible
	let minimumLength = Infinity;

    //* so long as the left side of our window is not greater that the length of the array, run a loop
	while (windowLeft < arr.length) {
		//* if the current window doesn't add up to the given sum and the right side of the window hasn't hit the end of the array
		if (total < sum && windowRight < arr.length) {
            //* increment the running total by the value currently at the right side of the sliding window
			total += arr[windowRight];
            //* grow the window by moving the right side of the window further to right
			windowRight++;
        //* else, if the running total is greater than or equal to the benchmark sum
		} else if (total >= sum) {
			//* reassign minimumLength based on which is smaller, the current minimum length or the length of the window
			minimumLength = Math.min(minimumLength, windowRight - windowLeft);
            //*  decrement the running total by the value currently at the left side of the sliding window
			total -= arr[windowLeft];
            //* shrink the window by moving the left side of the window to the right
			windowLeft++;
        //* if the running total is less than sum and we reach the end of the array, then break out of loop
		} else break;
	}

    //* if the minimum length did not change, handle infinity otherwise, return the recorded minimum length
	if (minimumLength === Infinity) return 0;
    else return minimumLength;
}


function minSubArrayLength(arr,sum) {
    //* edge case
    if (arr.length === 0) return 0;
    //* define window, total, and minLength
    let start = 0;
    let end = 1;
    let minLength = arr.length + 1;
    let total = arr[start];

    while (start < arr.length) {
        if (total >= sum) {
            //* save that length
            let tempLength = arr.slice(start, end).length;
            minLength = Math.min(minLength, tempLength);
            //* shrink the window
            total -= arr[start];
            start++;
        } else if (total < sum && end < arr.length) {
            //* grow the window if possible
            total += arr[end]
            end++;
            //* otherwise, the end has gone past the array, and we need to break the loop
        } else break;
    }
    //* if our initial minLength value didn't change, then there is no subarray that meets the condition
    if (minLength === arr.length + 1) return 0;
    else return minLength;
}

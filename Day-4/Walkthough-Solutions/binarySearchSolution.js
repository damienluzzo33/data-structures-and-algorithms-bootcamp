//? BINARY SEARCH

function binarySearch(arr, value) {
    //* define starting and ending points of the array
	let start = 0;
	let end = arr.length - 1;

    //* as long as the pointers don't cross, search for the value
	while (start <= end) {
        //* get the middle point using Math.floor, but make it valid for all possible iterations during our search
		let middle = Math.floor((end + start) / 2);

        //* if the value matches the mid point, we found it!
		if (value === arr[middle]) {
			return middle;
            //* if it is larger than the middle point, then we redefine our new start point
		} else if (value > arr[middle]) {
			start = middle + 1;
            //* if it is smaller than the middle point, then we redefine our new end point
		} else {
			end = middle - 1;
		}
	}
    //* if we don't find the value, return -1
	return -1;
}

console.log(binarySearch([1,9,13,17,26,33,45,51,62,68,71,80,96], 71)) 
//* expected result is the index 10
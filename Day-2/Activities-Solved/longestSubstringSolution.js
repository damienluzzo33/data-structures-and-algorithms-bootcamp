//?  SLIDING WINDOW



function findLongestSubstring(str) {
    //* keep track of longest substring length
	let longest = 0;
    //* keep track of the characters we see
	let seenObj = {};
    //* creating a starting point
	let start = 0;

    //* loop through the string
	for (let i = 0; i < str.length; i++) {
        //* get the character from the string
		let character = str[i];
        //* if seen object has that character
		if (seenObj[character]) {
            //* set the starting point to be the greater of the current start value or the value of the character in the seen object
			start = Math.max(start, seenObj[character]);
		}
		//* index from iteration - value corresponding to beginning of substring + 1
		longest = Math.max(longest, i - start + 1);
		//* store the index of the next character so that we do not double count anything
		seenObj[character] = i + 1;
	}
	return longest;
}

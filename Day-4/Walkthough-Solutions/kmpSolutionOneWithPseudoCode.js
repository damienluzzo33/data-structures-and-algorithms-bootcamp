//? KMP STRING SEARCH FULL

function kmpSearch(text, pattern) {
    //* if we want to be more impressive with this solution, we can keep track of the number of times that the given pattern is found in the given text input
    // let totalMatches = 0;
    //* create a function that will populate our "lps array" with the proper values
    function lpsArray(pattern, lps) {
        //* create the "longest prefix suffix" table as an array of zeros
        let lpsArray = new Array(pattern.length).fill(0);
        //* create a pointer called prevLPS and one called index
        //* prevLPS should start at zero, and because it remains zero always, we start index at 1
        let prevLPS = 0;
        let index = 1;
        //* while the index pointer is less than that length of the pattern
        while (index < pattern.length) {
            //* check to see if the index and prevLPS pointers point to the same value respectively
            if (pattern[index] === pattern[prevLPS]) {
                //* if they do, then set the lps value at that same index to be "prevLPS + 1"
                lps[index] = prevLPS + 1;
                //* then increment both pointers
                prevLPS++;
                index++;
            } else {
                //* if they don't point to the same value, we check if the prevLPS pointer is still at the start of the pattern
                if (prevLPS !== 0) {
                    //* if it's not, then set the prevLPS pointer to have a value that corresponds to the value of the lps at "prevLPS - 1"
                    prevLPS = lps[prevLPS - 1]
                } else {
                    //* if the prevLPS pointer is not zero, we simply increment the index
                    lps[index] = 0;
                    index++;
                }
            }
        }
        return lpsArray;
    }
    //* call the lpsArray function with the patter, pattern.length, and the lps zero array
    let lps = lpsArray(pattern);
    //* set the text and pattern pointers to start at the zero-ith element for the text and pattern strings, respectively
    let tPointer = 0;
    let pPointer = 0;
    //* while the text pointer is less than the text.length
    while (tPointer < text.length) {
        //* check to see if the characters of the text and pattern currently match
        if (text[tPointer] === pattern[pPointer]) {
            //* if they do, we increment both pointers
            tPointer++;
            pPointer++;
        } else {
            //* otherwise, if the pattern pointer is not at the beginning
            if (pPointer !== 0) {
                //* then we set pPointer to be the value of the lps at the "pPointer - 1" position
                pPointer = lps[pPointer-1]
                //* if pattern pointer is at the beginning
            } else {
                //* then increment the text pointer
                tPointer++;
            }
        }
        //* finally, check to see if the pattern pointer has moved beyond the scope of the pattern string
        if (pPointer === pattern.length) {
            //* if it has, then return true if we are only interested in that
            return true;
            //* if we want to continue to find all occurrences in the string then we reset the pointer and simply increment our totalMatches variable
            // totalMatches++;
            // pPointer = lps[pPointer-1];
        }
    }
    return false
    //* or we can return the totalMatches that we found
    // return totalMatches;
}

console.log(kmpSearch("axxaaxaa", "aa"));
//* expect 2
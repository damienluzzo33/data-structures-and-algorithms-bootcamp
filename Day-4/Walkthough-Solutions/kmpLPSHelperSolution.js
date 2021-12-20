//? KMP STRING SEARCH - LPS HELPER

//*  Derive the LPS helper function needed to compute the LPS Array for the KMP Algorithm
// EX: "eeffee" --> [ 0, 1, 0, 0, 1, 2 ]

function lpsArray(pattern) {
    //* Create an empty array that is the same length as the pattern and pre-fill with zeros
    let lpsTable = new Array(pattern.length).fill(0);
    // [0,0,0,0,0,0]
    //* create a pointer called prevLPS and one called index. The prevLPS pointer should start at zero, and because the first lps value is always 0, we start the index at 1.
    //* prevLPS essentially represents the length of the prefix that is being constructed
    let prevLPS = 0;
    let index = 1;
    //* while the index pointer is less than the length of the pattern, run a while loop
    while (index < pattern.length) {
    //* check to see if the value at the index pointer of the pattern is equal to the value at the prevLPS pointer
        if (pattern[index] === pattern[prevLPS]) {
            //* if they match, then we store the "virtual length" of the current prefix (AKA prevLPS + 1) in our lps array where the index pointer is currently positioned
            lpsTable[index] = prevLPS + 1;
            //* then increment both pointers
            prevLPS++;
            index++;
        }
        //* else, the values at the pointers are not equal
        else {
            //* if the prevLPS pointer is not at the 0 index
            if (prevLPS !== 0) {
                //* then there is a mismatch and we cannot build a longer "prefix", so we need to move the prevLPS pointer to the position of the previous largest prefix
                prevLPS = lpsTable[prevLPS - 1];
                //* Note: the previous largest prefix is stored as a value in the lps array at the prevLPS prior to the current (prevLPS - 1)
            } else {
                //* else we can can't build a prefix with the values of the current pointers
                lpsTable[index] = 0;
                index++;
                //* this means that we need to set the lps array value at the position of the index pointer to be zero and increment the index pointer
            }
        }
    }
    //* finally, we need to return the constructed lps array
    return lpsTable;
}

//* export helper function
module.exports = lpsArray;
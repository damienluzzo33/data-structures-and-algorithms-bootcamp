//? KMP STRING SEARCH - LPS HELPER

//*  Derive the LPS helper function needed to compute the LPS Array for the KMP Algorithm

function lpsArray(pattern) {
    //* Create an empty array that is the same length as the pattern and pre-fill with zeros

    //* create a pointer called prevLPS and one called index. The prevLPS pointer should start at zero, and because the first lps value is always 0, we start the index at 1.
    //* prevLPS essentially represents the length of the prefix that is being constructed

    //* while the index pointer is less than the length of the pattern, run a while loop

    //* check to see if the value at the index pointer of the pattern is equal to the value at the pattern pointer

        //* if they match, then we store the "virtual length" of the current prefix (AKA prevLPS + 1) in our lps array where the index pointer is currently positioned

        //* then increment both pointers

    //* else, the values at the pointers are not equal

        //* if the prevLPS pointer is not at the 0 index

        //* then there is a mismatch and we cannot build a longer "prefix", so we need to move the prevLPS pointer to the position of the previous largest prefix
        //* Note: the previous largest prefix is stored as a value in the lps array at the prevLPS prior to the current (prevLPS - 1)
    
        //* else we can can't build a prefix with the values of the current pointers

        //* this means that we need to set the lps array value at the position of the index pointer to be zero and increment the index pointer
        
    //* finally, we need to return the constructed lps array

}

//* export helper function
module.exports = lpsArray;
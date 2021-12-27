//? KMP STRING SEARCH - MAIN FUNCTION

// TODO: import helper function

const lpsArray = require("./lpsHelper");

// TODO: Create a function called KMP search that accepts a text string and a pattern

function kmpStringSearch(text, pattern) {
    // TODO: get the lps array for the given pattern by calling the lpsArray helper function

    // TODO:  start the pattern pointer and the text pointer at the start of their respective strings at index of 0

    // TODO: initialize the count to be zero if we are counting match occurrences

    // TODO: set up a while loop to loop so long as the text pointer is less than the length of the text string
    while () {

        // TODO: if the pattern's value at the pattern pointer is equal to the the text's value at the text pointer, then we found a match!
        if () {

            // TODO: all we do is increment both pointers

        }

        // TODO: else, if they do not match
        else {

            // TODO: if the pattern pointer is NOT equal to zero, then we set the pattern pointer to be the value of whatever the lps array contains at the pattern pointer minus 1.
            if () {

                // TODO: this is where the true efficiency of this algorithm comes from. This is how the pattern pointer "remembers" what is has matched so that we can actually traverse the text string without testing things from the start each time
            }

            // TODO: else, the pointer is non zero
            else {
                // TODO: we just need to increment the text pointer
            }
        }

        // TODO: as a final conditional, we check if the pattern pointer has gone beyond the pattern's total length
        if () {

            // TODO: if it has, then we return true because this means there were consecutive matches all the way through the pattern

            // TODO: if we want to continue in order to find all the occurrences of the pattern in the input text, then we reset the pointer to be the value of whatever the lps array contains at the pattern pointer minus 1, exactly the same way we did in the main else condition above, and then we increment the total matches variable we created
        }
    }

    // TODO: after all is said and done, and the while loop breaks, then we return false, or simply return the variable containing the total matches that we were able to identify
}
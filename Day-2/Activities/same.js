
//*  Write a function called same, which accepts two arrays. 
//*  The function should return true if every value in the array has its corresponding value squared in the second array. 
//*  The frequency of values must be the same.

//*  Test cases:
//*  same([1,2,3,4], [1,4,9,16]) resolves as true
//*  same([1,2,3,4], [1,3,5,25]) resolves as false



function same(arr, arr2) {
    // TODO: What edge case should be accounted for here?
    

    // TODO: Declare your frequency counters
    

    for (let val of arr) {
        // TODO: Count each value in arr, and increase the counter for each value
        
    }
    for (let val of arr2) {
        // TODO: Count each value in arr2, and increase the counter for each value
        
    }

    // TODO: Loop over the keys in one frequency counter
    for (let key in ) {
        // TODO: Check to see if the same key in one frequency counter is squared in the other frequency counter, if not return false
        

        // TODO: Check to see if the squared key has the same counter value as the corresponding key in the other counter, if not return false
        
    }
    
    return true;
}

// TODO: call the "same" function with a valid input
same();

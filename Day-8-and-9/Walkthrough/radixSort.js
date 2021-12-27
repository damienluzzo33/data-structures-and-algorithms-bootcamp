//?  RADIX SORT

//*  Create a function called radixSort that accepts an unsorted array of integers, which will return a sorted version of the array passed in. 

//* For the Main Function: Use the helper functions to get the number with the most digits that we can use as the basis for our outer loop, then loop through the entire array and start placing each of the elements into "bins" based on the digit at the currently evaluated "place" (the outer loop var) and then by the end of the two loops, our data will be sorted! 

//* Hint: We will need to recombine our array together after we put them into buckets... we can do this in one line using concat and the spread operator.


//* Radix Helper findDigit

// TODO: you should try to memorize this function
function findDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//*  EXAMPLE: 
//*  -3456 , 2
//*  |-3456| --> 3456
//*  3456 / (10 ^ 2) --> 3456 / 300 --> 34.56
//*  Math.floor(34.56) --> 34
//*  34 % 10 --> 4
//*  4


//* Radix Helper countDigit

// TODO: you should try to memorize this function
function countDigit(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//*  EXAMPLE:
//*  -3456
//*  |-3456| --> 3456
//*  log10(3456) --> 10 to what power equals 3456 --> 3.53857
//*  Math.floor(3.53857) --> 3
//*  3 + 1 --> 4
//*  4


//* Radix Helper mostDigits

function mostDigits(arr) {
    // TODO: start maximum digits variable at 0
    
    // TODO: loop through the array
    for () {
        // TODO: each time through, compare the digit count of that element with the max digit count stored
        
    }
    // TODO: return the maximum amount of digits found
    
}

//*  EXAMPLE:
//*  [456, 65, -3456]
//*  maxDigits --> 0
//*  i = 0  -->  maxDigits = Math.max(0, 3)  -->  3
//*  maxDigits --> 3
//*  i = 1  -->  maxDigits = Math.max(3, 2)  -->  3
//*  maxDigits --> 3
//*  i = 2  -->  maxDigits = Math.max(3, 4)  -->  4
//*  maxDigits --> 4
//*  4


//* Main Function

function radixSort(arr) {

    // TODO: use the helper function to find the number with the most digits in the array
    
    // TODO: loop through the total number of "places" based on the maxDigits
    for () {

        // TODO: create an array of bins with length 10 where each element should be an array itself

        // TODO: loop through the entire array
        for () {

            // TODO: use the helper function to get the digit of the current element at the current "place"
            
            // TODO: push that current element into the appropriate digitBin
            
        }
        // TODO: recombine the elements in the separate bins back into a single array
        
    }
    // TODO: return the sorted array
    
}


//*  How it actually works:

//*  [ 12, 123, 23, 3456, 654, 76, 876]

//*  [ 12, 123, 23, 654, 3456, 76, 876 ]

//*  [ 12, 123, 23, 654, 3456, 76, 876 ]

//*  [ 12, 23, 76, 123, 3456, 654, 876 ]

//*  [ 12, 23, 76, 123, 654, 876, 3456 ]



console.log(radixSort([12,123,23,3456,654,76,876]));
//* Expected Result: [12,23,76,123,654,876,3456]


//* Max Digits : O(k)
//* Radix Looping : O(n)

//* Radix Sort : O(nk)

//* For the worst case scenario - all unique, randomly distributed data, then we get O(n log n)

//* For the best case scenario - potential duplicates and not too long of digit lengths, then closer to O(n)

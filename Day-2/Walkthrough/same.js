
//*  Write a function called same, which accepts two arrays. 
//*  The function should return true if every value in the array has its corresponding value squared in the second array. 
//*  The frequency of values must be the same.

//*  Test case:
//*  same([1,2,3,4], [1,4,9,16]) resolves as true
//*  same([1,2,3,4], [1,3,5,25]) resolves as false


//*  Naive Approach

function naiveSame(arr, arr2) {
    if(arr.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr.length; i++) {
        let correctIndex = arr2.indexOf(arr[i] ** 2);
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}


//* Better approach

function same() {

}

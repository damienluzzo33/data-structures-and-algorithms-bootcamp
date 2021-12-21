//? SELECTION SORT

//* Write a function that takes in an array and uses the selection sort method to sort the array from smallest to biggest

//@ Hint: Use the swapping helpers from before!

//*  var temp = arr[index1];
//*  arr[index1] = arr[index2];
//*  arr[index2] = temp;
//@  OR
//*  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // TODO: Create a variable called lowestIndex that starts off equal to the value of i

        // TODO: Create a nested for loop that iterates from the index after the current value of i to the end of the array
        for () {
            // TODO: Check to see if the value at j is less than the value of the current lowest index
            if () {
                // TODO: if so, we need to update the lowest index
            }
        }
        // TODO: Check to see if the value of currentIndex has changed
        if () {
            // TODO: If it has changed, then we need to swap the values
        }
    }
    // TODO: return the sorted array
}

console.log(selectionSort([15,4,13,2,11]));
//* Expected Result: [2,4,11,13,15]
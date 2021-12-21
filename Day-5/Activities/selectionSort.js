//? SELECTION SORT

//* Write a function that takes in an array and uses the selection sort method to sort the array from smallest to biggest

//@ Hint: Use the swapping helpers from before!

//*  var temp = arr[index1];
//*  arr[index1] = arr[index2];
//*  arr[index2] = temp;
//@  OR
//*  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];


function selectionSort(arr) {
    // TODO: create a loop that starts at the beginning of the array to the end
    // TODO: create a variable called current element that represents the current element of the outer loop iteration

        // TODO: create an inner loop that starts at the second element in the array, i + 1, and goes to the end

            // TODO: if the current element of the outer loop is greater than the inner loop elements, replace the current element index with j

        // TODO: once the inner loop finishes, if the value of current element has changed, then swap the current element index with the current i value in the outer loop

    // TODO: return the sorted array
}

console.log(selectionSort([15,4,13,2,11]));
//* Expected Result: [2,4,11,13,15]

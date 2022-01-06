//?  QUICK SORT

function pivotHelper(arr, start=0, end=arr.length - 1) {
    let pivot = arr[start];
    let finalPivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            finalPivotIndex++;
            [arr[i], arr[finalPivotIndex]] = [arr[finalPivotIndex], arr[i]]
        }
    }

    [arr[start], arr[finalPivotIndex]] = [arr[finalPivotIndex], arr[start]]

    return finalPivotIndex;
}

function quickSort(arr, left=0, right=arr.length-1) {
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}


console.log(quickSort([13,9,11,3,7,5,15,1]));
//* Expected Result: [1,3,5,7,9,11,13,15]


//* Pivot Helper : O(n)
//* Decomposition : O(log n)

//* Quick Sort : O (n log n)

//* For the worst case scenario - an already sorted array OR a pivot that is the smallest value - O(n^2)

//* Can it be improved? Depends on the data... we could choose a middle value to avoid already sorted data issues, we could randomize it with no guarantee for improvement... just do what you like and stick to it
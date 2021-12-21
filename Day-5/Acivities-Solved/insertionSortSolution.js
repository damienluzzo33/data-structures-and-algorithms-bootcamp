//? INSERTION SORT

//@ With A Nested Loop Version 1

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentValue = arr[i];
        for (var j = (i - 1); j >= 0; j--) {
            if (arr[j] > currentValue) {
                arr[j+1] = arr[j];
            } else {
                break;
            }
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(insertionSort([22, 18, 3, 33, 24]));
//* Expected Result: [3,18,22,24,33]

//@ With A Nested For Loop Version 2

function insertionSortTwo(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentValue = arr[i];
        for (var j = (i - 1); j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(insertionSortTwo([12, 8, 13, 23, 14]));
//* Expected Result: [8,12,13,14,23]

//@ With A While Loop

function insertionSortThree(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = (i - 1);
        while ((j >= 0) && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(insertionSortThree([9, 11, 3, 33, 23]));
//* Expected Result: [3,9,11,23,33]
//? BUBBLE SORT

//* The Naive Bubble Sort
function naiveBubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(naiveBubbleSort([31, 14, 17, 9, 5, 23]));


//* The better Bubble Sort

function swapHelper(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function bubbleSort(arr) {
    let swapped;
    for (let i = arr.length - 1; i > 0; i--) {
        swapped = false;
        for (let j = 0; j < i; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                swapHelper(arr, j, (j + 1));
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

console.log(bubbleSort([31, 1, 7, 9, 15, 23]))

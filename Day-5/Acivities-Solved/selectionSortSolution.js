//? SELECTION SORT

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexLowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexLowest]) {
                indexLowest = j;
            }
        }
        if (indexLowest !== i) {
            let temp = arr[i];
            arr[i] = arr[indexLowest];
            arr[indexLowest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([33,11,3,9,16]));

//* Expected Output: [3,9,11,16,33]

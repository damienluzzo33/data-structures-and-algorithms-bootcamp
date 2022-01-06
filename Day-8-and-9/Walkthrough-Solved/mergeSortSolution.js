function mergeHelper(arr1, arr2) {
    let finalResult = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            finalResult.push(arr1[i]);
            i++;
        } else if (arr2[j] < arr1[i]) {
            finalResult.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        finalResult.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        finalResult.push(arr2[j]);
        j++;
    }
    return finalResult;
}


//* The Main Merge Sort Function


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let leftHalfArr = mergeSort(arr.slice(0, middle));
    let rightHalfArr = mergeSort(arr.slice(middle));
    return mergeHelper(leftHalfArr, rightHalfArr);
}
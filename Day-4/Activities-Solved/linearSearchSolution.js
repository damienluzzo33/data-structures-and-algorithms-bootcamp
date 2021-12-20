//? LINEAR SEARCH

function linearSearch(arr, value) {
    if (arr.length === 0) return undefined;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

console.log(linearSearch([11,9,3,7,6], 7)) 
//? expect to get 3


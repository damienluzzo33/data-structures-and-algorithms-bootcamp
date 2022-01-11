function findDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function countDigit(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, countDigit(arr[i]));
    }
    return maxDigits;
}

function radixSort(arr) {
    let maxDigits = mostDigits(arr);
    for (let i = 0; i < maxDigits; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let j = 0; j < arr.length; j++) {  
            let digit = findDigit(arr[j], i);   
            digitBuckets[digit].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}
function countUniqueValues(arr) {
    if(arr.length === 0) {
        return 0;
    }
    let first = 0;
    let second = 1;
    while(second < arr.length) {
        if(arr[first] !== arr[second]) {
            ++first;
            arr[first] = arr[second];
            second++;
        }else {
            second++;
        }
    }
    return first + 1;
}

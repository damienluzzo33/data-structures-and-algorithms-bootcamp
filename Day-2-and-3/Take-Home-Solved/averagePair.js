function averagePair(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if ((arr[start] + arr[end]) / 2 === val) {
            return true;
        } else if ((arr[start] + arr[end]) / 2 < val) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}
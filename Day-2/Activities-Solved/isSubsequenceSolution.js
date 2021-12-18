function isSubsequence(str1, str2) {
    let first = 0;
    let next = 0;
    if (!str1) {
        return true;
    }
    while (next < str2.length) {
        if (str2[next] === str1[first]) {
            first++;
        }
        if (first === str1.length) {
            return true;
        }
        next++;
    }
    return false;
}
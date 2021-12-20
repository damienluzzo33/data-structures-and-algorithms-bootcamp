function isPalindrome(str) {
    let first = 0;
    let last = str.length - 1;
    while(first < last) {
        if(str[first] === str[last]) {
            first++;
            last--
        }else {
            return false;
        }
    }
    return true;
}

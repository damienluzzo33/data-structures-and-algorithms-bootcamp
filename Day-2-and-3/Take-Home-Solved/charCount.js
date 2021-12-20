function charCount(str) {
    let lookup = {};
    for(let char of str) {
        if(lookup[char]) {
            lookup[char]++;
        }else {
            lookup[char] = 1;
        }
    }
    return lookup;
}
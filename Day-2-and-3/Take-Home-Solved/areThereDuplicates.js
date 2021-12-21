// Frequency Counter Approach
function areThereDuplicates() {
    let lookup = {};
    for (let i = 0; i < arguments.length; i++) {
        if (lookup[arguments[i]]) {
            return true;
        } else {
            lookup[arguments[i]] = 1;
        }
    }
    return false;
}

// Multiple Pointers
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

// One Liner Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}
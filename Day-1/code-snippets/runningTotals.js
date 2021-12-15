//* first iteration of our running total algorithm
//* time complexity : O(n)

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    };
    return total;
}

console.log(addUpTo(3))


//* second approach to our running total algorithm
//* time complexity : O(1)

function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(6))


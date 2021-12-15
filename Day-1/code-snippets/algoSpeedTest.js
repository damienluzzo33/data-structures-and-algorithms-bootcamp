//* speed tester for our first algorithmic approach
function addUpToB(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    };
    return total;
}

//* performance.now() calculates the duration of time since we opened or last refreshed the page in our browser
let timer1 = performance.now();
addUpToB(1000000000);
let timer2 = performance.now();

console.log(`Time elapsed: ${(timer2 - timer1) / 1000} seconds.`)



//* speed tester for our second approach
function addUpToA(n) {
    return n * (n + 1) / 2;
}

let timer1 = performance.now();
addUpToA(1000000000);
let timer2 = performance.now();

console.log(`Time elapsed: ${(timer2 - timer1) / 1000} seconds.`)



//* comparing both speeds in one run
function addUpToC(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    };
    return total;
}

let t1 = performance.now();
addUpToC(1000000000);
let t2 = performance.now();
let timing1 = ((t2 - t1) / 1000);


function addUpToD(n) {
    return n * (n + 1) / 2;
}

let t3 = performance.now();
addUpToD(1000000000);
let t4 = performance.now();
let timing2 = ((t4 - t3) / 1000);

console.log(`The mathy function is ${timing1/timing2}X faster than the for-loop function`)

//?  RECURSION

//*  Create a function that accepts a positive integer and logs a countdown from the inputted integer down to 0

function countDown(num) {
    if (num === 0) {
        console.log(0);
        return;
    }
    console.log(num);
    return countDown(num - 1);
}

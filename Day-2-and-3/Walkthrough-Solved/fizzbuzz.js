//?  REGULAR ALGORITHM

function fizzbuzz(num) {
    if(typeof num !== "number") return undefined;
    
    if((num % 5 === 0) && (num % 3 === 0)) {
        return "fizz buzz";
    }else if(num % 3 === 0) {
        return "fizz";
    }else if(num % 5 === 0) {
        return "buzz";
    }else {
        return num;
    }
}
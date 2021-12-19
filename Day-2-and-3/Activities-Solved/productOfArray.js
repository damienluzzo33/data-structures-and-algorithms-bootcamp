function productOfArray(arr) {
    let result = 1;
    function helper(input) {
        if(input.length === 0) {
            return;
        }
        result *= input[0];
        helper(input.slice(1));
    }
    helper(arr);
    return result;
}
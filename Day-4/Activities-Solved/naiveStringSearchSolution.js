//? NAIVE STRING SEARCH

function naiveStringSearch(text, pattern) {
    if (text.length === 0 || pattern.length === 0 || pattern.length > text.length) return false;
    if (text === pattern) return 1;

    let count = 0;

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] !== text[i+j]) {
                break;
            }
            if (j === pattern.length - 1) {
                count++;
            }
        }
    }
    return count;
}

console.log(naiveStringSearch('someawesomesauce', 'some'))
// expect this to return 2
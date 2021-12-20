//? KMP STRING SEARCH

function kmp(text, pattern) {
    // let totalMatches = 0;
    function lpsArray(pattern) {
        let lpsArray = new Array(pattern.length).fill(0);
        let prevLPS = 0;
        let index = 1;
        while (index < pattern.length) {
            if (pattern[index] === pattern[prevLPS]) {
                lpsArray[index] = prevLPS + 1;
                prevLPS++;
                index++;
            } else {
                if (prevLPS !== 0) {
                    prevLPS = lpsArray[prevLPS - 1]
                } else {
                    lpsArray[index] = 0;
                    index++;
                }
            }
        }
        return lpsArray;
    }
    let lps = lpsArray(pattern);
    // let totalMatches = 0;
    let tPointer = 0;
    let pPointer = 0;
    while (tPointer < text.length) {
        if (text[tPointer] === pattern[pPointer]) {
            tPointer++;
            pPointer++;
        } else {
            if (pPointer !== 0) {
                pPointer = lps[pPointer-1]
            } else {
                tPointer++;
            }
        }
        if (pPointer === pattern.length) {
            return true;
            // totalMatches++;
            // pPointer = lps[pPointer-1];
        }
    }
    return false
    // return totalMatches;
}

console.log(kmp("aaxxaaaxaa", "aa"));
//* we would expect 4

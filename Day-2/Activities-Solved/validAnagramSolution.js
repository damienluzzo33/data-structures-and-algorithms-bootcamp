//?  FREQUENCY COUNTER

function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    for(let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }
    for (let char in frequencyCounter1) {
        if(!(char in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[char] !== frequencyCounter1[char]) {
            return false;
        }
    }
    return true
}

// validAnagram Psuedocode
/* Given two strings, 
write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
(Use the frequency counter approach to solve this)
*/

function validAnagram(str1, str2){
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let char of str1) {
        // TODO: Increase the counter of the current char in str1 in the loop
        
    }
    for(let char of str2) {
        // TODO: Increase the counter of the current char in str2 in the loop
    }
    for (let char in frequencyCounter1) {
        // TODO: check to see if there are any missing characters in either frequency counters, if so return false
        
        // TODO: check to see if there are the same amount of characters in both strings, if not return false
        
    }
    return true
}

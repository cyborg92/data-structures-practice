/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples
isSubsequence('hello','hello world');//true
isSubsequence('sing','sting');//true
isSubsequence('abc','abracadabra');
isSubsequence('abc','acb');//false as order matters

Your solution MUST have ATLEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1);

Note: use multiple pointer technique
 */
function isSubsequence(subStr, mainStr) {
    if (subStr.length > mainStr.length) return false
    let i = 0;
    let j = 0;
    let seqFound = false;
    while (j < mainStr.length && i < subStr.length) {
        if (subStr[i] === mainStr[j]) {
            seqFound = true;
            i++
        }
        else {
            seqFound = false;
        }
        j++;
    }
    return seqFound;
}
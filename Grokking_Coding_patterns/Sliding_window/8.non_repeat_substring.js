/*
Problem Statement #
Given a string, find the length of the longest substring which has no repeating characters.


Solution #
This problem follows the Sliding Window pattern and we can use a similar dynamic sliding window strategy as discussed in Longest Substring with K Distinct Characters. 
We can use a HashMap to remember the last index of each character we have processed. 
Whenever we get a repeating character we will shrink our sliding window to ensure that we always have distinct characters in the sliding window.
*/

function non_repeat_substring(str) {
    let windowStart=0;
    let maxLength=0;
    let charMap={};
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(char in charMap){
           windowStart=Math.max(windowStart,charMap[char]+1);
        }
        charMap[char]=i;
        maxLength=Math.max(maxLength,(i-windowStart)+1);
    }
    return maxLength;
}

/*Time Complexity #
The time complexity of the above algorithm will be O(N) where ‘N’ is the number of characters in the input string.

Space Complexity #
The space complexity of the algorithm will be O(K) where K is the number of distinct characters in the input string. This also means K<=N, because in the worst case, the whole string might not have any repeating character so the entire string will be added to the HashMap. Having said that, since we can expect a fixed set of characters in the input string (e.g., 26 for English letters), we can say that the algorithm runs in fixed space O(1); in this case, we can use a fixed-size stray instead of the HashMap.*/

console.log(`Length of the longest non repeating character substring: ${non_repeat_substring('aabccbb')}`);
//output: 3 as abc
console.log(`Length of the longest non repeating character substring: ${non_repeat_substring('abbbb')}`);
//output: 2 as ab
console.log(`Length of the longest non repeating character substring: ${non_repeat_substring('abccde')}`);
//output: 3 as abc and cde
console.log(`Length of the longest non repeating character substring: ${non_repeat_substring('dvdf')}`);
//output: 3 as vdf
/*
Longest Substring with K Distinct Characters (medium)
Problem Statement
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

function longestSubString(str, k) {
  let windowStart = 0;
  let charMap = {};
  let maxLength = 0;
  let windowEnd;
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let tempChar = str[windowEnd];
    let rightChar = str[windowEnd];
    charMap[rightChar] = (charMap[rightChar] || 0) + 1;
    while (Object.keys(charMap).length > k) {
      let leftChar = str[windowStart];
      charMap[leftChar] -= 1;
      if (charMap[leftChar] == 0) {
        delete charMap[leftChar];
      }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(
  `Length of the longest substring: ${longestSubString("araaci", 2)}`
);
console.log(
  `Length of the longest substring: ${longestSubString("araaci", 1)}`
);
console.log(
  `Length of the longest substring: ${longestSubString("cbbebi", 3)}`
);

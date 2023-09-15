/*
Smallest Window containing Substring (hard) #
Given a string and a pattern, 
find the smallest substring in the given string which has all the characters of the given pattern.


Example 1:

Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"

Example 2:

Input: String="abdabca", Pattern="abc"
Output: "abc"
Explanation: The smallest substring having all characters of the pattern is "abc".

Example 3:

Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.


Solution #
This problem follows the Sliding Window pattern and has a lot of similarities with Permutation in a String with one difference. In this problem, we need to find a substring having all characters of the pattern which means that the required substring can have some additional characters and doesn’t need to be a permutation of the pattern. Here is how we will manage these differences:

1.We will keep a running count of every matching instance of a character.

2.Whenever we have matched all the characters, we will try to shrink the window from the beginning, keeping track of the smallest substring that has all the matching characters.

3.We will stop the shrinking process as soon as we remove a matched character from the sliding window. One thing to note here is that we could have redundant matching characters, e.g., we might have two ‘a’ in the sliding window when we only need one ‘a’. In that case, when we encounter the first ‘a’, we will simply shrink the window without decrementing the matched count. We will decrement the matched count when the second ‘a’ goes out of the window.*/

function find_substring(str, pattern) {
  let charFrequency = {};
  let windowStart = 0;
  let matched = 0;
  let substart=0;
  let minLength=str.length+1;
  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      // Decrement the frequency of matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }
    
    while(matched===pattern.length){
      if(minLength>windowEnd-windowStart+1){
        minLength=windowEnd-windowStart+1;
        substart=windowStart;
      }
      const leftChar=str[windowStart];
      windowStart+=1;
      if(leftChar in charFrequency){
        if(charFrequency[leftChar]===0){
          matched-=1;
        }
        charFrequency[leftChar]+=1;
      }
    }
  }
  if(minLength>str.length){
    return "";
  }
  return str.substr(substart,substart+minLength);
}

console.log(`Smallest Window containing Substring of given pattern: ${find_substring('aabdec', 'abc')}`);
console.log(`Smallest Window containing Substring of given pattern: ${find_substring('abdabca', 'abc')}`);
console.log(`Smallest Window containing Substring of given pattern: ${find_substring('adcad', 'abc')}`);

/*
Time Complexity #
The time complexity of the above algorithm will be O(N+M) where ‘N’ and ‘M’ are the number of characters in the input string and the pattern respectively.

Space Complexity #
The space complexity of the algorithm is O(M) since in the worst case, the whole pattern can have distinct characters which will go into the HashMap. In the worst case, we also need O(N) space for the resulting substring, which will happen when the input string is a permutation of the pattern.
*/

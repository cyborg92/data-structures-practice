/*Write a function findLongestSubstring which accepts a string and returns the length of the longest substring with distinct characters.
findLongestSubstring('')//0
findLongestSubstring('rithmschool')//7
findLongestSubstring('thisisawesome')//6
findLongestSubstring('thecatinthehat')//7
findLongestSubstring('longestsubstring')//8
findLongestSubstring('thisishowwedoit')//6
findLongestSubstring('bbbbbbbbbbbb')//1

Time Complexity: O(n)

Note: Use sliding window pattern
*/
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        
        seen[char] = i + 1;
    }
    return longest;
}


findLongestSubstring('thisisawesome');
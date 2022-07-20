/*Problem Statement #
Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray 
whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
Example 2:

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
Example 3:

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/

function smallest_SubArr_with_given_sum(arr, k) {
    let windowStart = 0;
    let minLength = Infinity;
    let windowSum = 0
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd];
      while (windowSum >= k) {
        minLength = Math.min(windowEnd - windowStart + 1, minLength);
        windowSum -= arr[windowStart];
        windowStart += 1;
      }
    }
      console.log(minLength === Infinity ? 0 : minLength);
    return (minLength === Infinity ? 0 : minLength);
  }
  
  smallest_SubArr_with_given_sum([2, 1, 5, 2, 3, 2], 7);
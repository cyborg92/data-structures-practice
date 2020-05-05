/* Looking for a sub-set for a pattern in an array, then this approach can be used.

Longest string of unique characters in string 'hellothere' will be 'lother'


MaxSub array sum or minsub array sum where calculate max/min sum of n consecutive numbers in an array */


function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = maxSum + arr[i] - arr[i - num];
        maxSum = Math.max(tempSum, maxSum);
    }
    
    return maxSum;
}
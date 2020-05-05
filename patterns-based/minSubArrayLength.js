/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Time Complexity- O(n)
Space Complexity- O(1)
*/

function minSubArrayLen(arr, sum) {
    let start = 0;
    let end = 0;
    let total = 0;
    let minLen = Infinity;
    let count=0;

    while (start < arr.length) {
        count++;
        console.log('inside while loop--->')
        console.log('value of count',count);
        console.log('val of start',start);
        console.log('val of end',end);
        console.log('val of total',total)
        console.log('val of minLen',minLen)

        if (total < sum && end < arr.length) {
            //expand the window to the right
            total += arr[end];
            end++
            console.log('inside if---->')
            console.log('val of start',start);
            console.log('val of end',end);
            console.log('val of total',total);
            console.log('val of minLen',minLen)
        }
        else if (total >= sum) {
            //decrease the window
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
            console.log('inside else if---->')
            console.log('val of start',start);
            console.log('val of end',end);
            console.log('val of total',total)
            console.log('val of minLen',minLen)
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            console.log('inside else---->')
            console.log('val of start',start);
            console.log('val of end',end);
            console.log('val of total',total)
            console.log('val of minLen',minLen)
            break;
        }
    }
    console.log('value outside of minLen',minLen);
    return minLen === Infinity ? 0 : minLen;
}
minSubArrayLen([2,3,1,2,4,3], 7);
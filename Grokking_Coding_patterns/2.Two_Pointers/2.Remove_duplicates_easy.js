/*
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; 
after removing the duplicates in-place return the new length of the array.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].

Solution #
Solution #
In this problem, we need to remove the duplicates in-place such that the resultant length of the array remains sorted. 
As the input array is sorted, therefore, one way to do this is to shift the elements left whenever we encounter duplicates.
In other words, we will keep one pointer for iterating the array and one pointer for placing the next non-duplicate number.
So our algorithm will be to iterate the array and whenever we see a non-duplicate number,
we move it next to the last non-duplicate number we’ve seen.

*/

function remove_duplicates(arr) {
let nextNonDuplicate=1;
for(let i=1;i<arr.length;i++){
    if(arr[nextNonDuplicate-1]!==arr[i]){
        arr[nextNonDuplicate]=arr[i];
        nextNonDuplicate+=1;
    }
    
}
return nextNonDuplicate;
}

console.log(`remove duplicates: ${remove_duplicates([2, 3, 3, 3, 6, 9, 9])}`);
console.log(`remove duplicates: ${remove_duplicates([2, 2, 2, 11])}`);


/*
Time Complexity #
The time complexity of the above algorithm will be O(N), where ‘N’ is the total number of elements in the given array.

Space Complexity #
The algorithm runs in constant space O(1).
 
 */

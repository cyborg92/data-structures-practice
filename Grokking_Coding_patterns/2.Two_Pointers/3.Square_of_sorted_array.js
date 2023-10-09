/*
Problem Statement #
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]

Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]

Solution #
The only trick is that we can have negative numbers in the input array, 
which will make it a bit difficult to generate the output array with squares in sorted order.

An easier approach could be to first find the index of the first non-negative number in the array. 
After that, we can use Two Pointers to iterate the array. 
One pointer will move forward to iterate the non-negative numbers and the other pointer will move backward to iterate the negative numbers. 
At any step, whichever number gives us a bigger square will be added to the output array.

Since the numbers at both the ends can give us the largest square, 
an alternate approach could be to use two pointers starting at both the ends of the input array.
At any step, whichever pointer gives us the bigger square we add it to the result array and
move to the next/previous number according to the pointer.
*/

function make_squares(arr) {
let left=0;
let highest_square_index=arr.length-1;
let right = arr.length-1;
let resultArr=Array(arr.length).fill(0);
while(left<=right){
    let leftsquare=arr[left]*arr[left];
    let rightSquare=arr[right]*arr[right];
    if(leftsquare>rightSquare){
        resultArr[highest_square_index]=leftsquare;
        left+=1;
    }
    else{
        resultArr[highest_square_index]=rightSquare
        right-=1;
    }
    highest_square_index-=1;
}
return resultArr;
}

console.log(`make squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`make squares: ${make_squares([-3, -1, 0, 1, 2])}`);


/*
Time Complexity #
The time complexity of the above algorithm will be O(N), where ‘N’ is the total number of elements in the given array.

Space Complexity #
The algorithm runs in constant space O(N). this space will be used for the output array.
 
 */

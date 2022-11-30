/*
Problem Statement #
Given an array of characters where each character represents a fruit tree, you are given two baskets and 
your goal is to put maximum number of fruits in each basket. 
The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. 
You will pick one fruit from each tree until you cannot, i.e., 
you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.


Solution #
This problem follows the Sliding Window pattern and is quite similar to Longest Substring with K Distinct Characters.
In this problem, we need to find the length of the longest subarray with no more than two distinct characters (or fruit types!). 
This transforms the current problem into Longest Substring with K Distinct Characters where K=2.
*/

function fruits_into_baskets(fruitsArr) {
    let windowStart = 0;
    let windowEnd;
    let maxLength = 0;
    let fruitFrequency  = {};
    for (windowEnd = 0; windowEnd < fruitsArr.length; windowEnd++) {
        const rightFruit  = fruitsArr[windowEnd];
        if(!fruitFrequency [rightFruit ]){
            fruitFrequency [rightFruit ]=0;
        }
        fruitFrequency [rightFruit ]+=1;
        while(Object.keys(fruitFrequency ).length>2){
            const leftFruit = fruitsArr[windowStart];
            fruitFrequency [leftFruit ]-=1;
            if(fruitFrequency [leftFruit ]=== 0){
                delete fruitFrequency [leftFruit ];
            }
            windowStart+=1;
        }
        maxLength=Math.max(maxLength,(windowEnd-windowStart)+1);
    }
    return maxLength
}

/*Time Complexity #
The time complexity of the above algorithm will be O(N) where ‘N’ is the number of characters in the input array. 
The outer for loop runs for all characters and the inner while loop processes each character only once, 
therefore the time complexity of the algorithm will be O(N+N) which is asymptotically equivalent to O(N).

Space Complexity #
The algorithm runs in constant space O(1) as there can be a maximum of three types of fruits stored 
in the frequency map.*/

console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`);
// Output: 3
console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);
// Output: 5
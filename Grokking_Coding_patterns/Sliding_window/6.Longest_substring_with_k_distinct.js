function longest_substring_with_k_distinct(arr, k) {
    let windowStart = 0;
    let windowEnd;
    let maxLength = 0;
    let charMap = {};
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        const rightChar = arr[windowEnd];
        if(!charMap[rightChar]){
            charMap[rightChar]=0;
        }
        charMap[rightChar]+=1;
        while(Object.keys(charMap).length>k){
            const leftChar= arr[windowStart];
            charMap[leftChar]-=1;
            if(charMap[leftChar]=== 0){
                delete charMap[leftChar];
            }
            windowStart+=1;
        }
        maxLength=Math.max(maxLength,(windowEnd-windowStart)+1);
    }
    return maxLength
}

/*Time Complexity #
The time complexity of the above algorithm will be O(N) where ‘N’ is the number of characters in the input string. 
The outer for loop runs for all characters and the inner while loop processes each character only once, 
therefore the time complexity of the algorithm will be O(N+N) which is asymptotically equivalent to O(N).

Space Complexity #
The space complexity of the algorithm is O(K), as we will be storing a maximum of ‘K+1’ characters in the HashMap.*/

console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
//output : 4 
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
//output : 2
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);
//output : 5
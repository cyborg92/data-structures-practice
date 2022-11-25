function smallest_subarray_with_given_sum(k,arr){
    let windowStart=0;
    let windowEnd=0;
    let minLength=Infinity;
    let sum=0;
    for(windowEnd=0;windowEnd<arr.length;windowEnd++){
        sum+=arr[windowEnd];
        console.log('sum',sum);
        while(sum>=k){
            minLength=Math.min(minLength,((windowEnd-windowStart)+1));
            sum-=arr[windowStart];
            windowStart+=1;
        } 
    }
    if(minLength===Infinity){
        return 0;
    }
    return minLength;
}

/*Time Complexity 
The time complexity of the above algorithm will be O(N). The outer for loop runs for all elements and the inner while loop processes each element only once, therefore the time complexity of the algorithm will be O(N+N) which is asymptotically equivalent to O(N).

Space Complexity #
The algorithm runs in constant space O(1).*/

console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`);
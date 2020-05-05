/* Question 
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2

*/

var subarraySum = function(nums, k) {
    //if nums is undefined or it is empty return 0
    if (!nums || !nums.length) return 0;
    /* create an object where the keys are going to be the cummulative 
	sum so far and the values are going to be the number of times that sum 
	happened */ 
    var sums = {0:1};
    /* create a var with the current cumulative sum */
    var currentSum = 0;
    /* var for number of times that we get k sum */
    var count = 0;
    for(var i = 0; i < nums.length; i++){
        /* add current value to currentSum to get the cumulative sum until 
		this point */
        currentSum += nums[i];
        /* if there is a cumulative sum (or multiple) that are k less than the 
		current, then the end index of the array(s) that have that sum to the end 
		index of the array that we are looking at have k sum */ 
        if(sums[currentSum - k]) count += sums[currentSum - k];
        /* add currentSum to the map or increase if it exists already */
        sums[currentSum] = (sums[currentSum] ? sums[currentSum] + 1 : 1);
    }
    return count;
};
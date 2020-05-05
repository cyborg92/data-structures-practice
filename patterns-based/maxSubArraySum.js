/* Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the max sum  of n consecutive elements in an array*/


function maxSubarraySum(arr,n){
    if(arr.length<n) return null;
    let maxSum=0;
    for(let i=0;i<n;i++){
        maxSum+=arr[i];
    }
    let tempSum=maxSum;
    for(let i=n;i<arr.length;i++){
        tempSum=tempSum-arr[i-n]+arr[i];
        maxSum=Math.max(tempSum,maxSum);   
    }
    console.log(maxSum);
    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3);
// needs a sorted array, we take 2 variables as pointers and then change their positions instead of running a nested loop
// eg array [-3,-2,-1,0,1,2,3] answer=> [-3,3]

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
}


//multiple Pointer count unique values
/*
Example input arrays

countUniqueValues([1,1,1,1,1,1,2])
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
countUniqueValues([-2,-1,-1,0,1])
countUniqueValues([])
*/
function countUniqueValues(arr){
    if(arr.length===0) return 0;
    let left=0
    let right=1;
    let resultArr=[arr[0]];
    while(right<arr.length){
        if(arr[left]!==arr[right]){
            resultArr.push(arr[right]);
            left=right;
        }
        right++;
    }
    return resultArr.length;
}

// ***** Easier approach with new Data type Set in Javascript

function countUniqueValues_diff(arr){
    return new Set(arr).size;
}
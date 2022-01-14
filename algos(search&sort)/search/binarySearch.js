/*
Divide and conquer rule where you split the array in half if the value is greater than the middle index val.

Note: Array must be sorted, must......
*/

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}



binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);

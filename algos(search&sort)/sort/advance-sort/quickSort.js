function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let storeIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        ++storeIndex;
        swap(arr, i, storeIndex);
      }
    }
    swap(arr, start, storeIndex);
    return storeIndex;
  }
  
  function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  
  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivotHelper(arr, left, right) //3
      //left
      quickSort(arr, left, pivotIndex - 1);
      //right
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
  
  console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
  
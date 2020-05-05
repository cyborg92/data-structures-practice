function mergeSort(arr){
    if(arr.length<=1) return arr;
    let middle=Math.floor(arr.length/2);
    let leftArr=arr.slice(0,middle);
    let rightArr=arr.slice(middle);
    let sortedleftArr=mergeSort(leftArr);
    let sortedRightArr=mergeSort(rightArr);
    return merge(sortedleftArr,sortedRightArr);
}
function merge(leftArr, rightArr) {
    let leftIndex = 0;
    let rightIndex = 0;
    let resultArr = [];
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] <= rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex]);
            leftIndex++;
        }
        else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }
    while (leftIndex < leftArr.length) {
        resultArr.push(leftArr[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < rightArr.length) {
        resultArr.push(rightArr[rightIndex]);
        rightIndex++;
    }
    console.log('resultArr---->>> ',resultArr);
    return resultArr;
}
 mergeSort([1,50,4,2,99,10]);
/*let arrRandom = [1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 19];

In Divide and Conquer, we divide the array into smaller chunks and search for the element asked for, if not there,
then we neglect that chunk and move to another chunk. Main condition for search like binary search that array needs to be sorted.
*/
function BinSearch(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    let middle = Math.floor((min + max) / 2);

    while (min <= max) {
        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle
        }

    }
    return -1;
}
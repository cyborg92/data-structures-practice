//Implementing the selection sort algo
/**
 * Its similar to bubble sort, but instead of first placing large values in sorted position, it place small values in sorted position.
 * We start with index 0 and then loop through array to find the smallest element for that iteration, once found we swap the value of smallest element and the index element.eg if i=0 and smallest element was found at index 4 for array length 6, then swap the value between i 0 and 4. Now increment the index.
 */

function selectionSortAlgo(arr) {

    for (i = 0; i < arr.length; i++) {
        let lowest = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) lowest = j;
        }
        // this condition is added so that we only swap when lowest index has changed.
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
        console.log('arr---->>>> ', arr);
    }
    console.log('final', arr);
    return arr;
}

selectionSortAlgo([5, 3, 4, 1, 2]);
/**
 * Builds up the sort by gradually creating larger left half which is always sorted.
 */

function insertionSortAlgo(arr){
    
    for(let i=1;i<arr.length;i++){
        let currentVal=arr[i];
        for(var j=i-1; j>=0 && arr[j]>currentVal;j--){
            arr[j+1]=arr[j]
            console.log('post changearr[j+1--->]',arr[j+1]);
        }
        arr[j+1]=currentVal;
        console.log('arr----------->',arr);
    }
    return arr;
}

insertionSortAlgo([2,1,9,76,4])
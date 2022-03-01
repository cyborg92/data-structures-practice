
function bubbleSortAlgo(arr){
    for(let i=0;i.arr.length;i++){
        for(let j=0;j<arr.length;j++){
            console.log(arr,arr[j],arr[j+1]);
            if(arr[j]<arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

/*Optimizing the algo, we will reduce the number of comparisons by iterating i loop in reverse and reducing the number of comparisons being made. Each time we know that last element has been set so we don't need to make the comparision again */

function bubbleSortAlgo_diff(arr){
    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i-1;j++){
            console.log(arr,arr[j],arr[j+1]);
            if(arr[j]<arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
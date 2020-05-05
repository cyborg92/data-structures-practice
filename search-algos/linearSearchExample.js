/*Looping through the array till you find the element
time complexity: O(n)

example return the index of the value in the given array
*/

function linearSearch(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val)return i;
    }
    return -1;
}
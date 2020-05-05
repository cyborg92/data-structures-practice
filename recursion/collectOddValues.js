/*Write a function named collectOddValues to collect odd values in a given array containing positive numbers
example: [1,2,3,4,5,6]
*/

function collectOddValues(arr){
    let newArr=[];
    if(arr.length===0){
        return newArr;
    }
    if(arr[0]%2!==0){
        newArr.push(arr[0]);
    }
    newArr=newArr.concat(collectOddValues(arr.slice(1)));
    console.log(newArr);
    return newArr;
}

collectOddValues([1,2,3,4,5,6]);
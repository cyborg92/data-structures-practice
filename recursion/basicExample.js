// basic recursion example
// here num is a number
function countDown(num){
    if(num<0) return;
    console.log(num);
    num--;
    countDown(num);
}

countDown(10);
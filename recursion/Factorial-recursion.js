/*
find the factorial of the given number, provides basic example of factorial.
*/
function Factorial(num) {
    if(num<0) return 0;
    if (num <= 1) return 1
    return num * Factorial(num - 1);
}
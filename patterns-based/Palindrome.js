/*
Writing a function which checks a given argument is palindrome or not.
*/

// Implementation 1  

//paramater is string with inbuilt functions

function palindrome(str){
    let rev=str.split('').reverse().join('');
    return str===rev;
}

// Implementation 2 

//paramater is string without inbuilt functions

function palindrome_new(str){
    //if str is to number, just make str=str.toString();
    let i=0
    let j=str.length-1;
    while(i<j){
        if(str[i]===str[j]){
            i++;
            j--;
        } else{
            return false;
        }
    }
    return true;
}

// Implementation 3
// if parameter is an integer, it can be positive, negative or zero

function palindrome_num(num){

    // here if the number is -123, then reverse is 123-, so number less than zero is never gonna be palindrome.
    // also number ending with zero needs to start with zero, so any number whose modulus is with 10 is zero, is not gonna be palindrome
    
    if( num <0 || (num%10===0 && num!==0)){
        return false;
    }

    let reverseNum=0;
    // logic here is splitting the number till the mid point and then return the final solution.
    while(num>reverseNum){
        reverseNum=reverseNum*10+num%10;
        num=Math.floor(num/10);
    }
    return num===reverseNum||num===Math.floor(reverseNum/10)  ;
}



/*
Write a function to reverse a string using recursion
Sample Input
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
 */

function reverse(str){
    if(str.length===1) return str;
    
    return str.slice(str.length-1,str.length)+reverse(str.slice(0,str.length-1));
}
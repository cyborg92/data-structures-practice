/*
Write a function to check if a given string a palindrome or not,means it is read same as forward or backwards

Sample Input
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
*/
function isPalindrome(str) {

    function reverse(str) {
        if (str.length === 1) return str;

        return str.slice(str.length - 1, str.length) + reverse(str.slice(0, str.length - 1));
    }
    let newStr = reverse(str);

    return newStr === str;

}
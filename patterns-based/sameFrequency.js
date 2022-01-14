/*
Write a function called sameFrequency.Given two positive integers, find out if the two numbers have the same 
frequency of digits.Your solution MUST have the following complexities:
Time: O(N)
Sample Input:


sameFrequency(182,281) true
sameFrequency(34,14) false
sameFrequency(3589578,5879385) true
sameFrequency(22,222) false
*/
function sameFrequency(num1,num2){
    var numb1=num1.toString().split('');
    var numb2=num2.toString().split('');
    if(numb1.length!==numb2.length) return false;
    let lookupObj1={};
    let lookupObj2={};
    
    for(let i=0;i<numb1.length;i++) {
        lookupObj1[numb1[i]]=(lookupObj1[numb1[i]]||0)+1;
    }
    console.log(lookupObj1);
    for(let i=0;i<numb2.length;i++) {
        lookupObj2[numb2[i]]=(lookupObj2[numb2[i]]||0)+1;
    }
    console.log(lookupObj2);
    for(let key in lookupObj1){
        if(!lookupObj2[key]){
            console.log('first if',lookupObj2[key]);
            return false;
        }
        if(lookupObj1[key]!==lookupObj2[key]){
            console.log('second if '+lookupObj1[key]+' '+lookupObj2[key]);
            return false;
        }
    } 
    return true;
}

sameFrequency(182,281);


//---------------------repractice solution------------------------

function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length !== str2.length) {
      console.log('false');
      return false;
    }
  
    let lookupObj = {};
  
    for (let i = 0; i < str1.length; i++) {
      lookupObj[str1[i]] = (lookupObj[str1[i]] || 0) + 1;
    }
  
    for (let i = 0; i < str2.length; i++) {
      if (!lookupObj[str2[i]]) {
        console.log('lookupObj', lookupObj);
        console.log('false');
        return false;
      }
      lookupObj[str2[i]] -= 1;
    }
    console.log('lookupObj', lookupObj);
    console.log('true');
    return true;
  
  }
  sameFrequency(34, 14);
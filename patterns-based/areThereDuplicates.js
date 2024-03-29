/*
Implement a function called,areThereDuplicates,which accepts a variable number of arguments,and checks whether there 
are any duplicates among the arguments passed in.You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Examples
areThereDuplicates(1,2,3) //false
areThereDuplicates(1,2,1) //true
areThereDuplicates('a','b','c','a')
*/

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 1) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

/*one line code with data type sets*/

function areThereDuplicatesNew() {
  return new Set(arguments).size !== arguments.length;
}
/*repractice implementation */

function areThereDuplicates(...args) {
  if (args.length === 0) {
    return false;
  }
  let lookupObj = {};
  for (let i = 0; i < args.length; i++) {
    if (lookupObj[args[i]]) {
      return true;
    }
    lookupObj[args[i]] = (lookupObj[args[i]] || 0) + 1;
  }
  return false;
}

areThereDuplicates(1, 2, 3);
areThereDuplicatesNew(1, 2, 3);

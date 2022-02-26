/**
 * Stacks are LIFO data structure, which means the last element added to the stack 
 * will be the first element to leave the stack.
 * 
 * <--------Use Case--------->
 * managing functions invocations
 * undo and redo operations
 * Routing (history Object) is treated like a stack
 * 
 * We can use an array to create a stack
 */

let stack=[];
stack.push(1);
stack.push(2);
stack.push(2);
stack;
stack.pop();
stack.pop();
stack.pop();

//Above operations of push and pop are O(1) but if unshift and shift are used to add and remove elements respectively
// then O(n) will be time complexity as arrays need to be re-indexed;

let stack1=[];
stack1.unshift(1);
stack1.unshift(2);
stack1.unshift(2);
stack;
stack1.shift();
stack1.shift();
stack1.shift();
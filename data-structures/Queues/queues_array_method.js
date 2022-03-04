/* 
Queues are FIFO date type i.e. first in first out. It's similar to our daily life queues, who gets into the queue/line first,
they are the one to get first out of it.

*/

// Array Implementation

let queue=[];

queue.push('first');
queue.push('second');
queue.push('third');
// queue -> [first,second,third];

// to get first out like a queue, we need to use shift.
queue.shift(); // first
queue.shift(); //second
queue.shift(); //third

// Issue is with shift, re-indexing of array happens which is again O(n) operation.

// 2nd array implementation

queue.unshift('first');
queue.unshift('second');
queue.unshift('third');
// queue -> [third,second,first];
// to remove elements, pop removes last element, but our first element is at end only
queue.pop(); //first
queue.pop(); //second
queue.pop(); //third

//Issue is with implementation of unshift which leads to re-indexing of array which is costly operation.

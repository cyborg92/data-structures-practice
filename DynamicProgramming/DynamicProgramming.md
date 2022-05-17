# Dynamic Programming

Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential to polynomial. For example, if we write simple recursive solution for Fibonacci Numbers, we get exponential time complexity and if we optimize it by storing solutions of subproblems, time complexity reduces to linear.


Note: Dynamic programming can only be used when we have optimal substructure and overlapping subproblems

## Overlapping Subproblems

A problem is said to have overlapping subproblems, if it can be broken down into subproblems which are reused several times.

eg - fibonacci series solution via recursion

## Optimal Substructure

A problem is said to have optimal substructure if an optimal solution can be constructed  from solutions of its subproblems

## Memoization

Storing the results of expensive function calls and returning the cached result when the same input occurs again

## Tabulation

Bottom to top approach

Storing the results of previous result in a table (usually an array). This is usally done using iteration.
Better space complexity can be achieved using tabulation.
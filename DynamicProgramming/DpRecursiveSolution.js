// DP base example using fibonacci series recursive solution

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
// Big O -> 2 to power n

// Problem with above solution, we are resolving everything again and again. So, here memoization comes into play

function fibNew(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1) + fib(n - 2);
  memo[n] = res;
  return res;
}

// generalised Big O of second solution --> O(n)

// Tabulated Version of Fibonacci series

function fibTabulated(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i < n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

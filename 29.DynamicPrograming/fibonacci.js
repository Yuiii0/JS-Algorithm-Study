//O(n) - Top-Down
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n]; //이전에 이미 계산된값이라면, 그대로 사용하면 된다
  if (n <= 2) return 1; //baseCase
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

function fib2(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

//O(n) - Bottom-up
function fibTable() {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

//O(2^n) = 반복되는 피보나치 함수를 또 계산한다.
function fibRecursive(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

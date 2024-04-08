//피보나치 수열은 1, 1로 시작하는 1, 1, 2, 3, 5, 8, ...의 정수의 수열이며, 모든 수는 이전 두 수의 합과 같다

function fib(n) {
  if ((n === 1) | (n === 2)) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4)); // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

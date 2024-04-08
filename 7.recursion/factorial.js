//재귀 버전
function factorial(num) {
  if (num === 1) return 1; //baseCase

  return num * factorial(num - 1);
}

//3 * factorial(2)       => 3*2 => return 6
//         2*factorial(1) => 2*1=> 2
//                1

//for문 버전
function factorial2(num) {
  let total = 1;

  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
console.log(factorial(1));

export function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
export function digitCount(num) {
  if (num === 0) return 1; //log10 0= Infinity
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
export function mostDigits(nums) {
  //가장 자릿수가 많은수
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

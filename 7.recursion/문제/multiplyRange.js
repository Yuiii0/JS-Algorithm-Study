//배열을 받아 모든 숫자의 곱을 반환

function multiplyRange(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * multiplyRange.slice(1);
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

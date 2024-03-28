function maxSubarraySum(arr, num) {
  if (arr.length < num) return null; // 배열의 길이가 num보다 작은 경우, null 반환

  let maxSum = 0;
  let tempSum = 0;

  // 처음 num개 요소의 합을 계산
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // 슬라이딩 윈도우로 나머지 배열 항목 확인
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));

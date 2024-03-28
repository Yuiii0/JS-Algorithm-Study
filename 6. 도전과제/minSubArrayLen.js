function minSubArrayLen(arr, num) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end];
      end++; //오른쪽 포인터 이동
    } else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start]; //왼쪽 포인터이동전에 기존 스타트값, 슬라이드 빼줌
      start++; //왼쪽 포인터 이동
    } else {
      //더이상 불가, 무한반복문 탈출
      break;
    }
  }

  // 최소 길이가 업데이트되었는지 확인하고, 업데이트되지 않았다면 0 반환
  return minLen === Infinity ? 0 : minLen;
}

function averagePair(arr, avg) {
  let start = 0;
  let end = arr.length - 1;
  let total = avg * 2;

  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === total) {
      return true;
    } else if (total < sum) {
      //오른쪽 포인터 이동
      end--;
    } else {
      start++;
    }
  }
  return false;
}

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false); // true

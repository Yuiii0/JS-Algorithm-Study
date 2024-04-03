function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end && arr[mid] !== target) {
    if (arr[mid] < target) {
      //오른쪽만 보기
      start = mid + 1;
    } else {
      //왼쪽보기
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === target ? mid : -1;
}
//고찰
//start=end가 while 조건문에 포함되어야하는이유: start=end=mid인 경우에 답이될수있기때문에 (최후로 도착)
//mid 인덱스 업데이트할때, mid가 target값이 아닌것을 이미 확인했기때문에, mid를 제외한 범위만 살펴본다!

console.log(binarySearch([1, 2, 3, 4, 5], 3)); //2

//2. 다른 버전 (내가 쓴 코드랑 유사)
function binarySearch2(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

//start=mid가 아니라 mid+1이여한다, 그래서 무한루프에 빠져서 오답이 발생함!

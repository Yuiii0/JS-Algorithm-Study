function merge(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  //arr1 포인터
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    //두 포인터가 동시에 돌아가는 경우
    if (arr1[i] < arr2[j]) {
      //왼쪽껄로 정렬
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  //두 배열 중 하나라도 이제 포인터가 끝난 경우
  while (i < arr1.length) {
    //arr1은 돌아갈 포인터가 남은 상태 & arr2는 j=arr2.length가 되어버림
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

console.log(merge([8, 3, 5, 4], [7, 6, 1, 2]));

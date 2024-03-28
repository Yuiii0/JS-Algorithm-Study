function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  //오른쪽 포인터가 주축으로 이동하면서 확인함
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++; //왼쪽 포인터 이동하고
      arr[i] = arr[j]; //값 씌우기
    }
  }
  return i + 1; //배열 특성상


  //sort되었다는 가정하에 진행됨
  //두 포인터 값이 같으면, 오른쪽 포인터 한칸씩 이동 (아무일도 일어나지 않음)
  //두 포인터 값이 다르면, 왼쪽 포인터 한칸 이동하고 거기에 그 값을 덮어씌우기, 오른쪽 포인터도 이동하기
}

console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 9]));

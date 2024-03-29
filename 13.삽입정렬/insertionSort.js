function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; //현재 선택된 요소

    // let j = i - 1; // 비교를 시작할 위치 (var)

    //현재 선택된 요소가 이전요소보다 작고(swap 필요)
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]; //한칸 뒤로 이동 (덮어쓰기)
    }
    //적절한 위치에 현재 요소 삽입
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertSort([2, 1, 9, 76, 4]));

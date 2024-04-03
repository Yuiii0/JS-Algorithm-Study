const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i; //초기값
    for (let j = i + 1; j < arr.length; j++) {
      //i는 이미 정렬완료되었다고 가정하기때문에, i+1부터
      // console.log(arr[j], arr[lowest]);
      if (arr[j] < arr[lowest]) {
        //lowest 업데이트
        lowest = j;
      }
    }
    //선택정렬은 각 루프가 끝날때마다 한번만 swap
    if (i !== lowest) {
      //이미 첫번째가 원래 최소값인데 swap하는것을 방지하기위해 i가 lowest가 아닐때만 swap
      //i가 lowest가 아니다 = 최소값을 업데이트해야한다. (맨처음값 (정렬완료제외))
      swap(arr, i, lowest); //맨처음값(i)와 최소값 swap
    }
  }
  return arr;
}

// console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));

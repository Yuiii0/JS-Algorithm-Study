import { swap } from "./swap";

function bubbleSort(arr) {
  let noSwaps; //거의 정렬된 경우 효율성을 위해 flag추가
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[i]);
      if (arr[j] > arr[j + 1]) {
        //swap!
        swap(arr, j, j + 1);
        noSwaps = false; //swap을 했기때문에 false로 변경

        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = arr[j];
      }
    }
    if (noSwaps) break; //배열을 순회하면서 한번도 swap하지 않았다=모두 정렬된 상태 이므로, 반복문 탈출
  }
  return arr;
}

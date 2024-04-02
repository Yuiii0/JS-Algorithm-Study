import { pivot } from "./pivot";

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    //left=right가 같아지면, breakpoint
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1); //pivotIndex는 정렬완료기 때문에 제외함
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

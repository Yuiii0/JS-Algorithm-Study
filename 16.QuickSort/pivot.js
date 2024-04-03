function swap(arr, idx1, idx2) {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
}

export function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, swapIdx, i); //swap (count+1)
    }
  }
  //pivot index 업데이트
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3]));

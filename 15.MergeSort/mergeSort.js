import { merge } from "./merge";

function mergeSort(arr) {
  if (arr.length <= 1) return arr; //baseCase
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 24, 76, 73, 72, 1, 9]);

//배열의 배열을 받아들이고 모든 값이 평활화(flattened)된 새 배열을 반환하는 flatten이라는 재귀(recursive ) 함수를 작성합니다.

function flatten(array) {
  let flattenArray = [];
  array.forEach((v) => {
    if (Array.isArray(v)) {
      //중첩배열이라면, true가 반환
      flattenArray = flattenArray.concat(flatten(v));
    } else {
      //중첩배열이 아닌 그냥 요소면, push
      flattenArray.push(v);
    }
  });
  return flattenArray;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

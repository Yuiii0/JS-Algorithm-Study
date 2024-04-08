//배열과 콜백을 받아들이는 someRecursive 라는 재귀(recursive) 함수를 작성하시오.
//이 함수는 배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다.

function someRecursive(array, callback) {
  if (array.length === 0) return false;

  //콜백함수가 현재 배열의 첫번째 요소에 대해 true를 반환하면, true
  if (callback(array[0])) return true;

  //그렇지 않으면, 재귀적으로 호출
  return someRecursive(array.slice(1), callback);
}

// someRecursive([1,2,3,4], isOdd) // true
// const isOdd = val => val % 2 !== 0;
// someRecursive([4,6,8], val => val > 10); // false

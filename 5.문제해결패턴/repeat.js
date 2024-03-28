//제곱되는 값이 다른 배열에 존재하는지 확인하는 문제

//1. O(n^2) 패턴 - 단순
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let findIndex = arr2.indexOf(arr1[i] ** 2);
    if (findIndex === -1) {
      //해당 제곱값이 없으면 false
      return false;
    }
    //해당 값이 있으면 arr2에서 제거하기
    arr2.splice(findIndex, 1);
  }
  return true;
}

// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

//2. 어차피 순서가 상관없으니까 각 제곱값 카운트가 맞는지 확인하기

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //arr1 순회하면서, 각 숫자 카운트 세기
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  //arr2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  //arr1과 arr2 비교하면서, 제곱한 수가 있는지, 갯수가 맞는지 확인
  for (let num of arr1) {
    //!객체라서 in연산자로 해당 key(프로퍼티)가 있는지 확인
    if (!(num ** 2 in frequencyCounter2)) {
      return false;
    }
    //각 객체의 key(num)가 제곱값으로 일치하는지 확인
    if (frequencyCounter1[num ** 2] !== frequencyCounter2[num]) {
      return false;
    }
  }
  return true;
}

console.log(same2([1, 2, 3, 2], [9, 1, 4, 4]));

//two-pointer

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  //0보다 작으면, 왼쪽 포인터 이동
  //0보다 크면, 오른쪽 포인터 이동
  while (left < right) {
    //left=right같으면, 자기자신을 빼는것이라서 당연히 0이될것이다
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      //오른쪽 포인터 이동
      right--;
    } else {
      //왼쪽 포인터이동
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

//num길이의 하위배열 중 maxSum 구하기

function maxSubArraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity; //이렇게 초기값을 지정하는이유는 그래야 무조건 첫번째 값이 max가 된다고 한다.

  for (let i = 0; i < arr.length - num; i++) {
    temp = 0;
    //num개수만큼 하위배열 묶어서, 합계 구하기
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    //max값 비교하고 업데이트하기
    if (temp > max) {
      max = temp;
    }
    // console.log(temp, max);
  }
  return max;
}

// console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

//위 방식은 하나씩 이동하면서 하나하나 묶어서 계산하는것이기 때문에 굉장히 비효율적이다!
//슬라이딩 윈도우 방식 사용! O(n^2)-> O(n)

function maxSubArraySum2(arr, num) {
  let max = 0;
  let temp = 0;

  if (arr.length < num) return null;

  //첫번째 max값 구하기
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;

  //i=새로 더해야하는 값이라고 생각
  for (let i = num; i < arr.length; i++) {
    //슬라이딩 윈도우 (전 하위배열의 첫번째값을 빼고, 다음값을 더한다)
    temp = temp - arr[i - num] + arr[i];
    //max값 찾기
    max = Math.max(max, temp);
  }
  return max;
}

console.log(maxSubArraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

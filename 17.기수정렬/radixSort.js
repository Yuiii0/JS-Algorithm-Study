import { getDigit, mostDigits } from "./helper";

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    //각 자릿수 bucket 만들기
    let digitBuckets = Array.from({ length: 10 }, () => []); //빈배열 10개를 가진 배열 생성

    //각 배열 순회하면서 버킷에 넣기
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k); //k값 0(일의자리)부터 숫자뽑기
      digitBuckets[digit].push(nums[i]); //해당 digit 버킷에 숫자 넣기
    }
    //❗️버킷에 넣은 순서대로 다시, 다음 자릿수 버킷을 진행하기 위해, nums배열 업데이트를 해준다.
    nums = [].concat(...digitBuckets); //flatten 주의
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

//flatten 예제
let digitBuckets = [[1, 2, 3], [4, 5], [6]];

// 평탄화(concat을 사용)
let flattened = [].concat(...digitBuckets);
console.log(flattened); // [1, 2, 3, 4, 5, 6] - 모든 숫자가 하나의 배열에 순차적으로 평탄화되어 있습니다.

// 배열의 배열(스프레드 연산자만 사용)
let notFlattened = [...digitBuckets];
console.log(notFlattened); // [[1, 2, 3], [4, 5], [6]] - 각 숫자 배열이 개별 요소로 남아 있는, 배열의 배열입니다.

//왜냐면
//스프레드 연산자가 내가 생각하는것처럼 숫자만 꺼내지는게 아니라, 이렇게 배열식으로 나오네?
console.log(...digitBuckets);
VM1019: 1(3)[(1, 2, 3)](2)[(4, 5)][6];

//문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다

function capitalizeFirst(array) {
  //배열 길이가 1이라면
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const result = capitalizeFirst(array.slice(0, -1)); //마지막요소 제거하고 recursion
  const lastEl = //마지막요소
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);

  result.push(lastEl); //마지막요소는 capitalize마쳤으니 push로 넣기
  return result;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

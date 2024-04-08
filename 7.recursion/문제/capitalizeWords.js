function capitalizeWords(array) {
  if (array.length === 1) {
    // 배열의 길이가 1인 경우
    return [array[0].toUpperCase()]; // 첫 요소를 대문자로 변환하여 반환
  }
  let res = capitalizeWords(array.slice(0, -1)); // 배열의 마지막 요소를 제외하고 함수를 재귀적으로 호출
  res.push(array.slice(array.length - 1)[0].toUpperCase()); // 마지막 요소를 대문자로 변환하여 결과 배열에 추가
  return res; // 결과 배열 반환
}

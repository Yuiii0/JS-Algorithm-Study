//str에 target의 문자열이 포함되는지?
//포함되면 count하기, 없으면 0 리턴

function naiveSearch(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (target[j] !== str[i + j]) {
        //i가 아니라 i+j를 확인하는것이 포인트!
        //j를 더해서, 해당숫자와 j를 똑같이 순회하는 느낌..?
        break;
      }
      if (j === target.length - 1) {
        //마지막 target의 문자열까지 일치하면 true!
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("abcomghla", "omga"));

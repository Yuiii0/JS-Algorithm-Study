function validAnagram(str1, str2) {
  //카운트 갯수세기해서 맞는지 확인하기

  //길이 확인 (early return)
  if (str1.length !== str2.length) {
    return false;
  }

  //각 객체별로 갯수세기
  let strCounter1 = {};
  let strCounter2 = {};

  for (let str of str1) {
    strCounter1[str] = (strCounter1[str] || 0) + 1;
  }
  for (let str of str2) {
    strCounter2[str] = (strCounter2[str] || 0) + 1;
  }

  //두 객체 비교해서 같은지 확인
  //1. key가 일치하는지 확인
  //2. 해당 key의 value가 일치하는지 확인
  for (let key in strCounter1) {
    if (!(key in strCounter2)) {
      return false;
    }
    if (strCounter1[key] !== strCounter2[key]) {
      return false;
    }
  }
  return true;
}

//해설방법 : 어차피 같은거니까 객체를 한개만 만듬
function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  //first 순회
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    //sec에 존재하면 카운트하기
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  console.log(lookup);

  //sec순회하면서 first와 일치하는지 확인 (카운트를 차감하는 식으로)
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      //없거나 0이면
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram2("qwerty", "qeywrt"));

function isSubsequence(first, sec) {
  let i = 0;
  //early return
  if (!first) return true;
  for (let j = 0; j <= sec.length; j++) {
    if (first[i] === sec[j]) {
      i++;
      if (i === first.length - 1) {
        //first의 마지막까지 일치하면 true
        return true;
      }
    }
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // false

//2. 재귀
function isSubsequence2(first, sec) {
  if (first.length === 0) return true;
  if (sec.length === 0) return false;

  if (first[0] === sec[0]) {
    return isSubsequence(first.slice(1), sec.slice(1));
  }

  
}

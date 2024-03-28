//다중 포인터
function areThereDuplicates(...val) {
  let i = 0;

  for (let i = 0; i < val.length - 1; i++) {
    for (let j = i + 1; j < val.length; j++) {
      if (val[i] === val[j]) {
        //같은 수 발견
        return true;
      }
    }
  }
  return false;
}

console.log(areThereDuplicates("a", "b", "c"));

function areThereDuplicates2(...val) {
  val.sort((a, b) => (a > b ? 1 : -1));

  let i = 0;
  for (let j = 1; j < val.length; j++) {
    if (val[i] === val[j]) {
      return true;
    }
    i++;
  }
  return false;
}

//2. 빈도수 패턴
function areThereDuplicates3(...val) {
  const obj = {};

  for (let i of val) {
    if (obj[i]) {
      return true;
    }
    obj[i] = 1;
  }
  return false;
}

//3. Set
function areThereDuplicates4(...arguments) {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates4("a", "b", "c", "a"));

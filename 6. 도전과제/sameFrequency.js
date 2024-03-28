function sameFrequency(first, second) {
  let obj = {};

  //1. first
  first = first.toString();
  second = second.toString();
  for (const num of first) {
    obj[num] ? (obj[num] += 1) : (obj[num] = 1);
  }

  //2. second
  for (const num of second) {
    if (!obj[num]) {
      return false;
    }
    obj[num] -= 1;
  }
  return true;
}

console.log(sameFrequency(12, 122));

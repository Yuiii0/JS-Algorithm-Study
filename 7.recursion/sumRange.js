function sumRange(num) {
  if (num === 1) return 1; //baseCase
  return num + sumRange(num - 1);
}

console.log(sumRange(3));

//return 3 + sumRange(2)       => 3+3 => return 6
//               2+sumRange(1) => 2+1
//                    1

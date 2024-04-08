//밑과 지수를 받아들이는 power 함수

function power(base, exponent) {
  if (exponent === 0) return 1;
  exponent--;
  return base * power(base, exponent);
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

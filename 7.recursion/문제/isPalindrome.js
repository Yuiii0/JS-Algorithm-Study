// 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인 경우 true 를 반환하는 isPalindrome이라는 재귀(recursive) 함수를 작성하시오.

function isPalindrome(str) {
  //공백, 대소문자 무시하기 위해, 소문자변환 & 공백제거
  str = str.toLowerCase().replace(/[^a-z]/g, "");

  if (str.length <= 1) {
    //baseCase (글자수가 홀수일때, 길이가 1이되는것도 고려해야함!)
    return true;
  }

  //첫번째 문자와 마지막 문자가 같다면
  //재귀적으로 검사
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return isPalindrome(str.substring(1, str.length - 1)); //첫글자,마지막 글자 제외해서 recursion
  }
  return false;
}

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

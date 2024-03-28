function findLongestSubstring(str) {
  let start = 0;
  let obj = {};
  let longest = 0;

  for (i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) {
      //이미 존재하면(고유x)
      start = Math.max(start, obj[char]); //?
    }
    longest = Math.max(longest, i - start + 1);
    obj[char] = i + 1; //다음 문자의 시작위치
    return longest;
  }
  console.log(obj);
}

console.log(findLongestSubstring("longestsubstring"));

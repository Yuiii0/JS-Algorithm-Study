//이 함수는 객체 내의 모든 문자열을 배열로 수집 -> helper함수 사용
function collectStrings(obj) {
  const array = [];

  function gatherStrings(ob) {
    for (const key of ob) {
      if (typeof ob[key] === "string") {
        array.push(ob[key]); //문자열 넣기
      } else if (typeof ob[key] === "object") {
        return gatherStrings(ob[key]); //recursion으로 내부 객체 처리
      }
    }
  }
}
//collectStrings(obj) // ["foo", "bar", "baz"])

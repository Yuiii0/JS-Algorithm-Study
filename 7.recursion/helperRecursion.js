//helper method recursion

// - outer함수를 개발자가 호출을 한다.(매개변수를 내부함수에 전달할 수도 있다)
// - helper함수에선 recursion
// - 배열이나, list같은것 컴파일 해야할때 헬퍼함수를 사용한다고 한다.

function outer(input) {
  let outerScopedVariable = []; //배열을 outer에 선언해야 재귀를하면서, 초기화가 되지 않음!

  function helper(helperInput) {
    helper(helperInput--); //recursion
  }
  helper(input); //외부함수에서 helper함수 호출

  return outerScopedVariable;
}

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return; //baseCase

    if (helperInput[0] % 2 !== 0) {
      //홀수면 result함수에 push
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1)); //recursion
  }
  helper(arr); //외부함수에서 helper함수 호출

  return result;
}

//result를 helper함수 내부에서 정의하면, 초기화가 될것이다 -> 헬퍼함수 사용 목적
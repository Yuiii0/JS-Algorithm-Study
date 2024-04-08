//객체를 받아 숫자인 모든 값을 찾아 문자열로 변환하는 StringifyNumbers라는 함수

function stringifyNumbers(obj) {
  let newObj = {};

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      //숫자->문자열로 변환
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      //객체인경우(배열이아닌)
      newObj[key] = stringifyNumbers(newObj[key]); //recursion
    } else {
      newObj[key] = obj[key]; //값 그대로 복사
    }
  }
  return newObj;
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

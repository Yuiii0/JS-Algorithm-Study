//일반적인 for문과 동일한 함수

function countDown(num) {
  if (num <= 0) {
    //baseCase
    console.log("END");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

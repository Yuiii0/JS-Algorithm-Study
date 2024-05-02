function solution(phone_book) {
  return !phone_book.sort().some((v, i) => {
    if (i === phone_book.length - 1) return false; //마지막 요소

    return phone_book[i + 1].startWith(v); //접두어 만족한다면,true
  });
}

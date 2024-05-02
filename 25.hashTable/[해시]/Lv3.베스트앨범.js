function solution(genres, plays) {
  let answer = [];

  //장르별 재생횟수가 담긴 obj
  const objByGenres = {}; //	{ classic: 1450, pop: 3100 }

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    objByGenres[genre] = objByGenres[genre] ? objByGenres[genre] + play : play;
  }

  //재생횟수 많은 배열형태로 저장
  const arr = Object.entries(objByGenres); //obj를 배열로 변경하고
  arr.sort((a, b) => b[1] - a[1]); //	[ [ 'pop', 3100 ], [ 'classic', 1450 ] ]

  //    	[
  //   { genre: 'classic', playCount: 500, index: 0 },
  //   { genre: 'pop', playCount: 600, index: 1 },
  //   { genre: 'classic', playCount: 150, index: 2 },
  //   { genre: 'classic', playCount: 800, index: 3 },
  //   { genre: 'pop', playCount: 2500, index: 4 }
  // ]
  let obj = genres.map((v, i) => ({
    genre: v,
    playCount: plays[i],
    index: i,
  }));

  //
  arr.forEach((v, i) => {
    let current = [];
    for (const info of obj) {
      if (v[0] === info.genre) {
        current.push(info);
      }
    }
    //내림차순 정렬
    current.sort((a, b) => b.playCount - a.playCount);
    current.forEach((v, i) => {
      if (i < 2) {
        answer.push(v.index);
      }
    });
  });

  return answer;
}

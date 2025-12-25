const V = 4;
const adj = Array.from({ length: V }, () => []);

// 간선 추가
adj[0].push(1, 2, 3);

adj[1].push(0, 2);

adj[2].push(0, 1);

adj[3].push(0);

// 방법 1: for...of 사용
for (let i = 0; i < 4; i++) {
  let output = i + " :: ";
  for (const there of adj[i]) {
    output += there + " ";
  }
  console.log(output);
}

console.log(); // 빈 줄

// 방법 2: 인덱스로 접근
for (let i = 0; i < 4; i++) {
  let output = i + " :: ";
  for (let j = 0; j < adj[i].length; j++) {
    output += adj[i][j] + " ";
  }
  console.log(output);
}

/* 출력:
0 :: 1 2 3 
1 :: 0 2 
2 :: 0 1 
3 :: 0 

0 :: 1 2 3 
1 :: 0 2 
2 :: 0 1 
3 :: 0 
*/

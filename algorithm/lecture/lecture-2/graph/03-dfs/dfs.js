const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let n,
  m,
  ret = 0;
let a = [];
let visited = [];

function dfs(y, x) {
  visited[y][x] = 1;

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
    if (a[ny][nx] === 1 && !visited[ny][nx]) {
      dfs(ny, nx);
    }
  }
}

function main() {
  // 고정 입력값
  n = 5;
  m = 5;

  // 예제 그리드 (1이 연결된 영역)
  a = [
    [1, 0, 1, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0],
  ];

  // visited 배열 초기화
  visited = Array.from({ length: n }, () => Array(m).fill(false));

  // DFS 수행
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (a[i][j] === 1 && !visited[i][j]) {
        ret++;
        dfs(i, j);
      }
    }
  }

  console.log(ret);
}

main();

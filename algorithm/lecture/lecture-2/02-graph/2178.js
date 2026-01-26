// N×M크기의 배열로 표현되는 미로가 있다.

// 1	0	1	1	1	1
// 1	0	1	0	1	0
// 1	0	1	0	1	1
// 1	1	1	0	1	1

// 미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸을 나타낸다.
// 이러한 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야 하는 최소의 칸 수를 구하는 프로그램을 작성하시오.
// 한 칸에서 다른 칸으로 이동할 때, 서로 인접한 칸으로만 이동할 수 있다.

// 위의 예에서는 15칸을 지나야 (N, M)의 위치로 이동할 수 있다. 칸을 셀 때에는 시작 위치와 도착 위치도 포함한다.

// 입력
// 첫째 줄에 두 정수 N, M(2 ≤ N, M ≤ 100)이 주어진다. 다음 N개의 줄에는 M개의 정수로 미로가 주어진다. 각각의 수들은 붙어서 입력으로 주어진다.

// 출력
// 첫째 줄에 지나야 하는 최소의 칸 수를 출력한다. 항상 도착위치로 이동할 수 있는 경우만 입력으로 주어진다.

// 예제 입력
// 4 6
// 101111
// 101010
// 101011
// 111011

// 예제 출력
// 15

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((v) => v.split("").map(Number));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const sy = 0;
const sx = 0;

const visited = Array.from({ length: N }, () => Array(M).fill(0));

function main() {
  const q = [];

  visited[sy][sx] = 1;
  q.push([sy, sx]);

  while (q.length) {
    const [y, x] = q.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny < 0 || ny >= N || nx < 0 || nx >= M || maze[ny][nx] === 0)
        continue;

      if (visited[ny][nx]) continue;

      visited[ny][nx] = visited[y][x] + 1;
      q.push([ny, nx]);
    }
  }
}

main();

// 최단거리 출력
console.log("최단거리:", visited[N - 1][M - 1]);
console.log();

// 전체 맵의 거리 출력 (디버깅용)
console.log("거리 맵:");
for (let i = 0; i < N; i++) {
  console.log(visited[i].join(" "));
}

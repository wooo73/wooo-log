/**
 * 
 * 
 Q. 3 * 3 맵을 입력받아야 함. 
 이 맵은 1과 0으로 이루어져있고 {0, 0}은 무조건 1임을 보장한다. 
 {0, 0}부터 4방향을 기준으로 한칸씩 탐색해나가며 방문한 정점은 다시 방문하지 않으며 방문하는 좌표를 출력하는 코드. 0은 갈 수 없는 지역. 1은 갈 수 있는 지역을 구현하시오.
 */

const map = [
  [1, 0, 1],
  [1, 1, 1],
  [0, 1, 0],
];

const n = 3;

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const a = Array.from({ length: map.length }, () =>
  Array.from({ length: map[0].length }, () => 0)
);

const visited = Array.from({ length: map.length }, () =>
  Array.from({ length: map[0].length }, () => 0)
);

function main() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      a[i][j] = map[i][j];
    }
  }

  go(0, 0);
}

function go(y, x) {
  visited[y][x] = 1;
  console.log(y, x);

  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
    if (a[ny][nx] === 0) continue;
    if (visited[ny][nx] === 1) continue;

    go(ny, nx);
  }

  return;
}

main();

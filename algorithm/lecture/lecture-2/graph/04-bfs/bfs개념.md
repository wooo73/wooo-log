# bfs

그래프를 탐색하는 알고리즘이며 어떤 정점에서 시작해 다음 깊이의 정점으로 이동하기전 현재 깊이의 모든 정점을 탐색하며 방문한 정점은 다시 방문하지 않는 알고리즘입니다. 같은 가중치를 가진 그래프에서 최단거리알고리즘으로 쓰입니다.

# 수도코드

```code
BFS(G, u)
    u.visited = true
    q.push(u);
    while(q.size())
        u = q.front()
        q.pop()
        for each v ∈ G.Adj[u]
            if v.visited == false
                v.visited = true
                q.push(v)

// 최단거리를 위해 +1 처리한 수도코드
BFS(G, u)
    u.visited = 1
    q.push(u);
    while(q.size())
        u = q.front()
        q.pop()
        for each v ∈ G.Adj[u]
            if v.visited == false
                v.visited = u.visited + 1
                q.push(v)

```

# 예제 문제

```js
// 그래프에서 화살표는 한칸이라는 의미를 가집니다.
// 10번정점으로부터 24번 정점까지의 최단거리는 얼마일까요

let n = 8;

const nodeList = [10, 12, 14, 16, 18, 20, 22, 24];

const adj = Array.from({ length: 100 }, () => []);
const visited = Array(100).fill(0);

adj[10].push(12, 14, 16);
adj[12].push(18, 20);
adj[20].push(22, 24);

function main() {
  bfs(10);

  for (let n of nodeList) {
    console.log(n + ":" + visited[n]);
  }

  console.log("10번으로부터 24번까지 최단거리는 : ", visited[24] - 1);
}

function bfs(here) {
  // 시작 노드: 10번 노드부터 시작
  let q = [];
  visited[here] = 1;
  q.push(here);

  while (q.length) {
    const here = q.shift(); // 현재 방문 중인 노드(큐에서 꺼내옴)

    // 현재 노드와 연결된 모든 노드들을 순회
    for (let there of adj[here]) {
      if (visited[there] === 1) continue;
      visited[there] = visited[here] + 1; // 현재 노드까지의 거리 + 1
      q.push(there);
    }
  }
}

main();

// 시작 지점이 다수라면?
(function () {
  const nodeList = [10, 12, 14, 16, 18, 20, 22, 24];

  const adj = Array.from({ length: 100 }, () => []);
  const visited = Array(100).fill(0);

  adj[10].push(12, 14, 16);
  adj[12].push(18, 20);
  adj[14].push(22);
  adj[20].push(22, 24);

  // 시작점이 여러 개인 BFS
  function bfs(starts) {
    // 배열로 받음
    let q = [];

    // 모든 시작점을 큐에 넣고 visited 표시
    for (let start of starts) {
      visited[start] = 1;
      q.push(start);
    }

    while (q.length) {
      const here = q.shift();

      for (let there of adj[here]) {
        if (visited[there]) continue;
        visited[there] = visited[here] + 1;
        q.push(there);
      }
    }
  }

  function main() {
    bfs([10, 12, 14]); // 3개 지점에서 동시 시작

    for (let n of nodeList) {
      console.log(n + " : " + visited[n]);
    }
  }

  main();
})();
```

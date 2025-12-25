# DFS

DFS는 그래프를 탐색할 때 쓰는 알고리즘이며 어떤 노드부터 시작해 인접한 노드들을 재귀적으로 방문하며 방문한 정점은 다시 방문하지 않으며 각 분기마다 가능한 가장 멀리 있는 노드까지 탐색하는 알고리즘입니다.

# 수도코드

수도코드(pseudocode)는 프로그램의 로직을 표현하기 위해 쓰이는 코드입니다. 주로 어떤 알고리즘이 어떠한 로직을 갖고 있는지 나타내기 위해 씁니다.

```code
DFS(u, adj)
    u.visited = true
    for each v ∈ adj[u]
        if v.visited == false
            DFS(v, adj)
```

연결된 정점에서 방문한 노드를 표기하고 방문하지 않는 노드를 탐색한다.

```js
const n = 6;

const adj = Array.from({ length: n }, () => []);
const visited = Array(n).fill(0);

function dfs(u) {
  visited[u] = 1;

  for (let there of adj[u]) {
    if (visited[there] === 0) {
      dfs(there);
    }
  }

  console.log(`${u}로부터 시작된 함수가 종료되었습니다.`);
}

function main() {
  adj[1].push(2);
  adj[1].push(3);
  adj[2].push(4);
  adj[4].push(2);
  adj[2].push(5);
  dfs(1);
}

main();
```

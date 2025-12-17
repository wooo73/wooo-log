/**
 *
1번.
    정점은 0번 부터 9번까지 10개의 노드가 있다. 1 - 2 /  1 - 3 / 3 - 4 라는 경로가 있다. (1번과 2번, 1번과 3번, 3번과 4번은 연결되어있다.) 
    이를  이를 인접행렬로 표현한다면? 
2번. 
    0번부터 방문안한 노드를 찾고 해당 노드부터 방문, 연결된 노드를 이어서 방문해서 출력하는 재귀함수를 만들고 싶다면 어떻게 해야할까?
    또한, 정점을 방문하고 다시 방문하지 않게 만드려면 어떻게 해야할까? 
 */

const V = 10
const visited = Array(V).fill(0)

// 인접 행렬 초기화: V x V 크기의 2차원 배열을 0으로 초기화
const a = Array.from({ length: V }, () => Array(V).fill(0))

function main() {
    // 간선 추가 (무방향 그래프)
    a[1][2] = 1
    a[2][1] = 1
    a[1][3] = 1
    a[3][1] = 1
    a[3][4] = 1
    a[4][3] = 1

    // 행렬 출력
    for (let i = 0; i < V; i++) {
        for (let j = 0; j < V; j++) {
            if (a[i][j] === 1 && visited[i] === 0) {
                go(i)
            }
        }
    }
}

function go(from) {
    visited[from] = 1
    console.log(from)
    for (let i = 0; i < V; i++) {
        if (visited[i]) continue
        if (a[from][i] === 1) {
            go(i)
        }
    }
    return
}

main()

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

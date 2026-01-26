// 수도코드를 보고 코드를 구축하는 연습을 하셔야 합니다.
// 아래와 같이 그래프가 주어졌을 때 비어진 함수를 채워서 preorder, inorder, postorder를 구현하고
// 이 때 방문했을 때 해당 노드를 출력하는 것을 구현해보세요.

//      1
//     ╱ ╲
//    2   3
//   ╱ ╲
//  4   5

const adj = Array.from({ length: 6 }, () => []);
adj[1].push(2, 3);
adj[2].push(4, 5);

const visited = Array(6).fill(0);

function postOrder(here) {
  if (visited[here] === 0) {
    if (adj[here].length == 1) postOrder(adj[here][0]);

    if (adj[here].length == 2) {
      postOrder(adj[here][0]);
      postOrder(adj[here][1]);
    }

    visited[here] = 1;
    console.log(here);
  }
}

function preOrder(here) {
  if (visited[here] === 0) {
    visited[here] = 1;
    console.log(here);

    if (adj[here].length == 1) preOrder(adj[here][0]);

    if (adj[here].length == 2) {
      preOrder(adj[here][0]);
      preOrder(adj[here][1]);
    }
  }
}

function inOrder(here) {
  if (visited[here] === 0) {
    if (adj[here].length == 1) {
      inOrder(adj[here][0]);

      visited[here] = 1;
      console.log(here);
    } else if (adj[here].length == 2) {
      inOrder(adj[here][0]);

      visited[here] = 1;
      console.log(here);

      inOrder(adj[here][1]);
      visited[here] = 1;
    } else {
      visited[here] = 1;
      console.log(here);
    }
  }
}

function main() {
  const root = 1;

  console.log("트리 순회 : postOrder \n");
  postOrder(root);
  visited.fill(0);

  console.log("트리 순회 : preOrder \n");
  preOrder(root);
  visited.fill(0);

  console.log("트리 순회 : inOrder \n");
  inOrder(root);

  return 0;
}

main();

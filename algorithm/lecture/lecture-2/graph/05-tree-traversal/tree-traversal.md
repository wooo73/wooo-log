# 트리 순회

트리 순회(Tree traversal)는 트리 구조에서 각각의 노드를 정확히 한 번만, 체계적인 방법으로 방문하는 과정을 말합니다.
이는 노드를 방문하는 순서에 따라 후위순회, 전위순회, 중위순회, 레벨순회가 있습니다.
보통 설명할 때는 이진트리를 기반으로 설명하지만 다른 모든 트리에서 일반화를 시킬 수 있습니다.

# 후위 순회

후위 순회는 자식 노드들을 방문하고 자신의 노드를 방문하는 것을 말합니다.

## 수도 코드

```code
postorder( node )
    if (node.visited == false)
        postorder( node->left )
        postorder( node->right )
        node.visited = true
```

# 전위 순회

전위순회는 먼저 자신의 노드를 방문하고 그 다음 노드들을 방문하는 것을 말합니다. (DFS를 생각하면 됩니다.)

## 수도 코드

```code
preorder( node )
    if (node.visited == false)
        node.visited = true
        preorder( node->left )
        preorder( node->right )
```

# 중위 순회

중위순회는 왼쪽 노드를 먼저 방문 그 다음의 자신의 노드를 방문하고 그 다음 오른쪽 노드를 방문하는 것을 말합니다.

```code
inorder( node )
    if (node.visited == false)
        inorder( node->left )
        node.visited = true
        inorder( node->right )
```

# 레벨순회

레벨순회(level traversal)입니다. 앞서 설명한 BFS를 생각하시면 됩니다

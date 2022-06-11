const levelOrder = (root, answer = [], depth = 0) => {
    if(!root) return []
    if(!answer[depth]) answer[depth] = []
    answer[depth].push(root.val)
    levelOrder(root.left, answer, depth + 1)
    levelOrder(root.right, answer, depth + 1)
    return answer
}
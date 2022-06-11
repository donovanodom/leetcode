const inorderTraversal = (root, answer = []) => {
    if(!root) return []
    inorderTraversal(root.left, answer)
    answer.push(root.val)
    inorderTraversal(root.right, answer)
    return answer
}
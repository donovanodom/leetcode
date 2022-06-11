const postorderTraversal = (root, answer = []) => {
    if(!root) return []
    postorderTraversal(root.left, answer)
    postorderTraversal(root.right, answer)
    answer.push(root.val)
    return answer
}
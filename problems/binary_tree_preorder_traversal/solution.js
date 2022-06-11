const preorderTraversal = (root, answer = []) => {
    if(!root) return []
    answer.push(root.val)
    preorderTraversal(root.left, answer)
    preorderTraversal(root.right, answer)
    return answer
}
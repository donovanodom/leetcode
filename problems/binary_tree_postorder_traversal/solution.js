const postorderTraversal = (root, list = []) => {
    if(!root) return list
    postorderTraversal(root.left, list)
    postorderTraversal(root.right, list)
    list.push(root.val)
    return list
}
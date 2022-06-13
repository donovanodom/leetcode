const inorderTraversal = (root, list = []) => {
    if(!root) return []
    inorderTraversal(root.left, list)
    list.push(root.val)
    inorderTraversal(root.right, list)
    return list
}
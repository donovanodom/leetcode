const preorder = (root, list = []) => {
    if(!root) return []
    list.push(root.val)
    root.children.forEach((child) => preorder(child, list))
    return list
}
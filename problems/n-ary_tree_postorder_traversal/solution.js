const postorder = (root, list = []) => {
    if(!root) return []
    root.children.forEach((child) => postorder(child, list))
    list.push(root.val)
    return list
}
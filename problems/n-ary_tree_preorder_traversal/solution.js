const preorder = (root, list = []) => {
   if(!root) return []
    list.push(root.val)
    root.children.map((child) => preorder(child, list))
    return list
}
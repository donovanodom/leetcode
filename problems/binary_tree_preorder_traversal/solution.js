const preorderTraversal = (root, list = []) => {
	if (!root) {
		return []
	}
	list.push(root.val)
    preorderTraversal(root.left, list)
    preorderTraversal(root.right, list)
	return list
}
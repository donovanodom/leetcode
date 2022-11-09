const kthSmallest = function(root, k) {
    let list = Object.keys(traverse(root))
    return list[k - 1]
}

const traverse = (node, list = {}) => {
    if(!node) return 
    list[node.val] = true
    traverse(node.left, list)
    traverse(node.right, list)
    return list
}
const findLeaves = (root) => {
    const traverse = (node, list) => {
        if(!node) return null
        if(!node.left && !node.right) {
            list.push(node.val)
            return null
        }
        node.left = traverse(node.left, list)
        node.right = traverse(node.right, list)
        return node
    }
    let answer = []
    while(root) {
        let leaves = []
        root = traverse(root, leaves)
        answer.push(leaves)
    }
    return answer
}
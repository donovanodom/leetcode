const findLeaves = function(root) {
    let answer = []
    while(root){
        let leaves = []
        root = traverse(root,leaves)
        answer.push(leaves)
    }
    return answer
}

const traverse = (node, leaves) => {
    if(!node) return null
    if(!node.left && !node.right){
        leaves.push(node.val)
        return null
    }
    node.left = traverse(node.left, leaves)
    node.right = traverse(node.right, leaves)
    return node
}
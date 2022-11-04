const rightSideView = function(root) {
    let ans = [], obj = traverse(root)
    Object.keys(obj).map((key) => ans.push(obj[key].pop()))
    return ans
}

const traverse = (node, l = 1, obj = {}) => {
    if(!node) return {}
    if(!obj[l]) obj[l] = []
    obj[l].push(node.val)
    traverse(node.left, l + 1, obj)
    traverse(node.right, l + 1, obj)
    return obj
}
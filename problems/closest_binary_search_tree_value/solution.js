const closestValue = (root, target) => {
    const traverse = (node, arr = []) => {
        if(!node) return null
        arr.push([Math.abs(node.val-target),node.val])
        if(node.left) traverse(node.left, arr)
        if(node.right) traverse(node.right, arr) 
        return arr
    }
    const ans = traverse(root).sort((a,b) => a[0] - b[0])
    return ans[0][1]
}
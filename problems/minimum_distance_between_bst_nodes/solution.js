const minDiffInBST = function(root) {
    let min = Infinity, prev = -Infinity
    const dfs = (node) => {
        if(!node) return
        dfs(node.left)
        min = Math.min(node.val - prev, min)
        prev = node.val
        dfs(node.right)
    }
    dfs(root,min,prev)
    return min
}
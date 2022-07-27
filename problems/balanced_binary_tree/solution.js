const isBalanced = function(root) {
    const dfs = (root) => {
        if (!root) return 0
        let right = dfs(root.right), left = dfs(root.left)
        if(left == -1 || right == -1) return -1
        if(Math.abs(left - right) > 1) return -1
        return Math.max(left,right) + 1
    }
    return dfs(root) != -1
}
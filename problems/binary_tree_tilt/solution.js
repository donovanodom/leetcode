const findTilt = function(root, sum = 0) {
    if(!root) return 0
    let ans = 0
    const dfs = (node) => {
        if(!node) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)
        const temp = node.val + left + right
        ans += Math.abs(left - right)
        node.val = Math.abs(left - right)
        return temp
    }
    dfs(root)   
    return ans
}
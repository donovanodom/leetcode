const diameterOfBinaryTree = function(root) {
    let answer = 0
    const dfs = (root) => {
        if(!root) return -1
        let left = dfs(root.left), right = dfs(root.right)
        answer = Math.max(answer, 2 + left + right)
        return Math.max(left,right)+1
    }
    dfs(root)
    return answer
}
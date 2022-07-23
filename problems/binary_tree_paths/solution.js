const binaryTreePaths = function(root) {
    let answer = []
    const dfs = (root, str = '') => {
        if(!root) return null
        if(!root.left & !root.right){
            str += root.val
            answer.push(str)
        } 
        if(root.left) dfs(root.left, str + root.val + '->')
        if(root.right) dfs(root.right, str + root.val + '->') 
    }
    dfs(root)
    return answer
};
const deepestLeavesSum = function(root) {
    let obj = {}
    const traverse = (root, depth = 0) => {
        if(!root) return 0
        if(!root.left && !root.right){
            if(!obj[depth]) obj[depth] = 0
            obj[depth] += root.val
        } 
        let left = traverse(root.left, depth + 1, obj)
        let right = traverse(root.right, depth + 1, obj)
        depth = Math.max(left,right) + 1
        return depth
    } 
    return obj[traverse(root) - 1]
}
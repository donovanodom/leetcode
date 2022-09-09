const increasingBST = function(root) {
    let arr = traverse(root).sort((a,b) => a - b), ans = new TreeNode(), dummy = ans
    for(const num of arr){
        dummy.right = new TreeNode(num)
        dummy = dummy.right
    }
    return ans.right
}

const traverse = (node, list = []) => {
    if(!node) return
    list.push(node.val)
    traverse(node.left, list)
    traverse(node.right, list)
    return list
} 
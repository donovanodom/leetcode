const flatten = function(root) {
    let arr = traverse(root), dummy = root 
    if(!arr) return []
    arr = arr.slice(1)
    while(arr.length){
        dummy.right = new TreeNode(arr.shift())
        dummy.left = null
        dummy = dummy.right
    }
    return root
}

const traverse = (node, list = []) => {
    if(!node) return
    list.push(node.val)
    traverse(node.left, list)
    traverse(node.right, list)
    return list
} 
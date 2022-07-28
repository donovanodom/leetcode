const findLeaves = (root) => {
    let leaves = []
    while(root){
        let list = []
        root = traverse(root, list)
        leaves.push(list)
    }
    return leaves
}

const traverse = (root, list) => {
    if(!root) return
    if(!root.left && !root.right){
        list.push(root.val)
        return null
    } 
    root.left = traverse(root.left, list) 
    root.right = traverse(root.right, list)
    return root
}
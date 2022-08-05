const findLeaves = (root) => {
    let answer = []
    while(root){
        let list = []
        root = traverse(root,list)
        answer.push(list)
    }
    return answer
}

const traverse = (root,list) => {
    if(!root) return null
    if(!root.left && !root.right){
        list.push(root.val)
        return null
    }
    root.left = traverse(root.left, list)
    root.right = traverse(root.right, list)
    return root
}
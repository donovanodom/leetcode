const findSecondMinimumValue = function(root) {
    if(!root) return - 1
    let list = traverse(root)
    list = [... new Set(list.sort((a,b) => a - b))]
    if(list.length < 2) return -1
    return list[1]
}

const traverse = function(root, list = []) {
    if(!root) return null
    list.push(root.val)
    traverse(root.left, list) && traverse(root.right, list)
    return list
}
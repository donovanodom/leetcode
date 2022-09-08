const leafSimilar = function(root1, root2) {
    return toStr(traverse(root1)) == toStr(traverse(root2))
}

const toStr = (arr) => {
    let str = ''
    for(const num of arr){
        str += ':' + num
    }
    return str
}
const traverse = (root, list = []) => {
    if(!root) return
    if(!root.left && !root.right) list.push(root.val)
    traverse(root.left, list) 
    traverse(root.right, list)
    return list
}
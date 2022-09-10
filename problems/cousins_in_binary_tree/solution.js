const isCousins = function(root, x, y) {
    let obj = findNodes(root, x, y)
    return obj[x][0] == obj[y][0] && obj[x][1] != obj[y][1] 
}

const findNodes = (node, x, y, d = 0, p = 0, obj = {}) => {
    if(!node) return null
    if(node.val == x) obj[x] = [d,p]
    if(node.val == y) obj[y] = [d,p]
    findNodes(node.left, x, y, d + 1, p = node.val, obj) 
    findNodes(node.right, x, y, d + 1, p = node.val, obj)
    return obj
}
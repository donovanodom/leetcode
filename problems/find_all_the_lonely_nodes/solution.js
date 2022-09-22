const getLonelyNodes = function(node, list = []) {
    if(!node) return
    if(!node.right && node.left) list.push(node.left.val)
    if(!node.left && node.right) list.push(node.right.val)
    getLonelyNodes(node.left, list)
    getLonelyNodes(node.right, list)  
    return list
}
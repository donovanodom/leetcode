const sumNumbers = (node, str = '', list = []) => {
    if(!node) return
    str += node.val
    if(!node.left && !node.right) list.push(str)
    sumNumbers(node.left, str, list)
    sumNumbers(node.right, str, list)
    return list.reduce((a,b) => Number(a) + Number(b))
}
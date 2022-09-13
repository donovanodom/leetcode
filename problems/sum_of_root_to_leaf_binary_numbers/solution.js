const sumRootToLeaf = function(root) {
    let list = [], sum = 0
    traverse(root, list)
    for(const str of list){
        sum += parseInt(str, 2)
    }
    return sum
};

const traverse = (node, list, num = '') => {
    if(!node) return
    num += node.val
    if(!node.left && !node.right) list.push(num)
    traverse(node.left, list, num)
    traverse(node.right, list, num)
}
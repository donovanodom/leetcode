const tree2str = function(root, list = '') {
    if(!root) return '' 
    let left = !root.left && root.right ? '()' : root.left ? `(${tree2str(root.left, list)})` : '' 
    let right = root.right ? `(${tree2str(root.right, list)})` : ''
    list += `${root.val}` + left + right
    return list
}
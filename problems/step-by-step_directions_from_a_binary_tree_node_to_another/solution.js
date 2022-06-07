const getDirections = (root, startValue, destValue) => {
    let ancestor = findAncestor(root, startValue, destValue)
    let depth = findDepth(ancestor, startValue)
    let path = findPath(ancestor, destValue)
    return 'U'.repeat(depth) + path
}

// Need to determine least common ancestor
const findAncestor = (root, start, end) => {
    if(!root) return null
    if(root.val == start || root.val == end) return root
    const left = findAncestor(root.left, start, end)
    const right = findAncestor(root.right, start, end)
    if(left && right) return root
    return left || right
}

// Need to determine depth
const findDepth = (root, val, count = 0) => {
    if(!root) return 0
    if(root.val == val) return count
    return findDepth(root.left, val, count + 1) || findDepth(root.right, val, count + 1)
}

// Need to determine path
const findPath = (root, val, str = '') => {
    if(!root) return ''
    if(root.val == val) return str
    return findPath(root.left, val, str + 'L') || findPath(root.right, val, str + 'R')
}
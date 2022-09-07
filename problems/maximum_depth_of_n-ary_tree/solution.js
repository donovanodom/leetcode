const maxDepth = function(root, depth = 0, depths = new Set()){
    if(!root) return 0
    depth += 1
    if(!root.children.length) depths.add(depth)
    root.children.forEach((child) => {
        maxDepth(child, depth, depths)
    })
    return Math.max(...depths)
} 
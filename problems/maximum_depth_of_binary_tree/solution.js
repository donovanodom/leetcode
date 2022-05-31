const maxDepth = (root) => {
    if(!root) return 0
    let levels = []
    const checkLevel = (root, track) => {
        track++
        levels.push(track)
        if(root.right){
            checkLevel(root.right, track)
        }
        if(root.left){
            checkLevel(root.left, track)
        } 
    }
    checkLevel(root, track = 0)
    return Math.max(...levels)
}
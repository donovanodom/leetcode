const isSubtree = function(root, subRoot) {
    const compare = (roota, rootb) => {
        if(!roota && rootb || roota && !rootb) return false
        if(!roota && !rootb) return true
        if(roota.val == rootb.val){
            return compare(rootb.left, roota.left) && compare(rootb.right, roota.right) 
        }
    }
    const traverse = (root) => {
        if(!root) return false
        return compare(root, subRoot) || traverse(root.left) || traverse(root.right)
    }
    return traverse(root)
}
   


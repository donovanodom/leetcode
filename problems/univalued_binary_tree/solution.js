const isUnivalTree = function(root, uni = true) {
    if(!root) return 
    if(root.left != null && root.left.val == root.val){
        uni = isUnivalTree(root.left, uni)
    }else if(root.left != null){
        uni = false
    }
    if(root.right != null && root.right.val == root.val){
        uni = isUnivalTree(root.right, uni)   
    }else if(root.right != null){
        uni = false
    }
    return uni
}
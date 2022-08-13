const mergeTrees = (root1, root2) => {
    let root = new TreeNode()
    if(root1 && root2){
        root.val = root1.val + root2.val
        root.left = mergeTrees(root1.left, root2.left)
        root.right = mergeTrees(root1.right, root2.right)
    }else if(root1 && !root2){
        root.val = root1.val
        root.left = mergeTrees(root1.left, null)
        root.right = mergeTrees(root1.right, null)
    }else if(root2 && !root1){
        root.val = root2.val
        root.left = mergeTrees(null, root2.left)
        root.right = mergeTrees(null, root2.right)
    }else{
        return null
    }
    return root
}
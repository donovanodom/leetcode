const evaluateTree = function(root) {
    if(root.val == 2){
        return evaluateTree(root.left) || evaluateTree(root.right)
    }else if(root.val == 3){
        return evaluateTree(root.left) && evaluateTree(root.right)
    }
    return root.val
}
const sumOfLeftLeaves = function(root, sum = 0, left) {
    if(!root) return 0
    if(!root.left && !root.right && left){
        return root.val
    }else{
        sum += sumOfLeftLeaves(root.left, sum, left = true) + sumOfLeftLeaves(root.right, sum, left = false)
    }
    return sum
}
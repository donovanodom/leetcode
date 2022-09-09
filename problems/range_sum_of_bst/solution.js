const rangeSumBST = function(root, low, high, sum = [0]) {
    if(!root) return
    if(root.val <= high && root.val >= low) sum[0] += root.val
    rangeSumBST(root.left, low, high, sum)
    rangeSumBST(root.right, low, high, sum)
    return sum[0]
}
const sortedArrayToBST = function(nums) {
    if(!nums.length) return null
    let mid = Math.floor(nums.length / 2), root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0,mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1))
    return root
}
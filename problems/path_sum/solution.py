class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return 
        def dfs(node, total = 0):
            if not node:
                return 
            total += node.val
            if not node.left and not node.right and total == targetSum:
                return True
            return dfs(node.left, total) or dfs(node.right, total)
        return dfs(root)
        
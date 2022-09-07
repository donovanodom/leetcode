class Solution:
    def maxDepth(self, root: 'Node') -> int:
        if not root:
            return 0
        curMax = 0
        for child in root.children:
            curMax = max(self.maxDepth(child),curMax)
        return curMax + 1
            

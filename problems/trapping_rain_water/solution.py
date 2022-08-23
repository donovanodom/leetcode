class Solution:
    def trap(self, height: List[int]) -> int:
        left = [0] * len(height)
        right = [0] * len(height)
        i, j, lm, rm, ans = 0, len(height) - 1, 0, 0, 0
        while i < len(height) and j >= 0:
            left[i] = lm
            lm = max(lm,height[i])
            right[j] = rm
            rm = max(rm,height[j])
            i += 1
            j -= 1
        for c in range(len(height)):
            cell = min(left[c],right[c]) - height[c]
            if cell > 0:
                ans += cell
        return ans
            
        
            
        
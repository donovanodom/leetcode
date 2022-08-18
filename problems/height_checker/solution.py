class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        ans = 0
        copy = list(i for i in heights)
        copy.sort()
        for i in range(len(heights)):
            if heights[i] != copy[i]:
                ans += 1
        return ans
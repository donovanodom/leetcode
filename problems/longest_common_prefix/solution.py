class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ""
        ans = strs[0]
        i = 1
        while i < len(strs):
            while strs[i].find(ans) != 0:
                ans = ans[:len(ans) - 1] 
            i += 1
        return ans
                
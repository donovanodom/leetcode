class Solution:
    def largeGroupPositions(self, s: str) -> List[List[int]]:
        obj, i = dict(), 0
        while i < len(s):
            j = i
            while j < len(s) and s[i] == s[j]:
                j += 1
            if j - i > 2:
                obj[i] = j - 1
            i = j
        return [list(pair) for pair in obj.items()]
        
        

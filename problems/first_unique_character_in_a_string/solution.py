class Solution:
    def firstUniqChar(self, s: str) -> int:
        s = [*s]
        for i in range(len(s)):
            temp = s[i]
            s[i] = None  
            if temp not in s:
                return i
            s[i] = temp
        return -1
        
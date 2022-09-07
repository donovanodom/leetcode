class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        n = len(s)
        while n >= 0:
            s = s[1:] + s[:1]
            if s == goal:
                return True
            n -= 1
        return False
        
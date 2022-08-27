class Solution:
    def countLetters(self, s: str) -> int:
        count, i = 0, 0
        while i < len(s):
            j, char = i, s[i]
            while j < len(s) and s[i] == s[j]:
                count += 1
                j += 1
            i += 1
        return count

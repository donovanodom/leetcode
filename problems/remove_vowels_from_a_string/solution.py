class Solution:
    def removeVowels(self, s: str) -> str:
        vow = ['a','e','i','o','u']
        i = 0
        while i < len(s):
            if s[i] in vow:
                s = s[0:i] + s[i+1:]
            else:
                i +=1
        return s
class Solution:
    def validPalindrome(self, s: str) -> bool:
        i, j, dif = 0, len(s) - 1, 0
        while i < j and dif <= 1:
            if s[i] == s[j]:
                i += 1
                j -= 1
            else:
                left, right = [*s], [*s]
                left.pop(i)
                right.pop(j)
                return ''.join(left) == ''.join(left[::-1]) or ''.join(right) == ''.join(right[::-1])
        return True
        

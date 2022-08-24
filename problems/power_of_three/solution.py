class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n == 1:
            return True
        factor = 3
        while factor <= n:
            if factor == n:
                return True
            factor *= 3
        return False
        
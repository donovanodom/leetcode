class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        pows = list(range(0,32))
        for pow in pows:
            if 2 ** pow == n:
                return True
        return False
        
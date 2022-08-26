class Solution:
    def reorderedPowerOf2(self, n: int) -> bool:
        if n == 1:
            return True
        pows = list(range(1,30))
        for pow in pows:
            str1 = ''.join(sorted(str(2 ** pow)))
            str2 = ''.join(sorted(str(n)))
            if len(str1) > len(str2):
                break
            if str1 == str2:
                return True
        return False
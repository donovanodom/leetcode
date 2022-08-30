class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        bin = format(n,'b')
        for i in range(1, len(bin)):
            if bin[i] == bin [i - 1]:
                return False
        return True
        
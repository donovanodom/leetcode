class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        ans = []
        for i in range(left,right + 1):
            isSelfDividing = True
            for char in str(i):
                if int(char) == 0 or i % int(char) != 0:
                    isSelfDividing = False
            if isSelfDividing:
                ans.append(i)
        return ans
        

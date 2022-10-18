class Solution:
    def findRotation(self, mat: List[List[int]], target: List[List[int]]) -> bool:
        i = 4
        while i > 0:
            if str(list(chain.from_iterable(mat))) == str(list(chain.from_iterable(target))):
                return True
            mat = list(zip(*mat[::-1]))
            i -= 1
        return False
        
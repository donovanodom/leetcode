class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        i = 0
        for cell in list(zip(*matrix)):
            matrix[i] = cell[::-1]
            i += 1
        return matrix
        
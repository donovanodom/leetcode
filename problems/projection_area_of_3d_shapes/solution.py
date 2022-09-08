class Solution:
    def projectionArea(self, grid: List[List[int]]) -> int:
        top, front, side = len(grid) ** 2, 0, 0
        for arr in grid:
            for cell in arr:
                if cell <= 0:
                    top -= 1
        for arr in grid:
            front += max(arr)
        sides = list(zip(*grid))
        for tup in sides:
            side += max(tup)
        return top + front + side
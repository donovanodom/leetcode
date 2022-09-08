class Solution:
    def largestTriangleArea(self, points: List[List[int]]) -> float:
        lg = 0
        for i in range (0, len(points)):
            for j in range (i + 1, len(points)):
                for k in range (j + 1, len(points)):
                    lg = max(abs((points[i][0]*(points[j][1] - points[k][1]) + 
                    points[j][0]*(points[k][1] - points[i][1])) +
                    points[k][0]*(points[i][1] - points[j][1])) / 2, lg)
        return lg
        
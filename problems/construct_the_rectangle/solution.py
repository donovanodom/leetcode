class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        for i in range(floor(area ** 0.5), 0, -1):
            if area % i == 0:
                return [int(area / i), i]
        
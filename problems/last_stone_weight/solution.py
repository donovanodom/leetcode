class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        while len(stones) > 1:
            x = stones.pop(stones.index(max(stones)))
            y = stones.pop(stones.index(max(stones)))
            if x - y != 0:
                stones.append(x - y)
        if len(stones):
            return stones[0]
        else:
            return 0

        
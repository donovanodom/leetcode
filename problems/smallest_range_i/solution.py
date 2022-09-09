class Solution:
    def smallestRangeI(self, nums: List[int], k: int) -> int:
        minimum, maximum = min(nums), max(nums)
        if minimum + k >= maximum -k:
            return 0
        else:
            return (maximum - k) - (minimum + k)
        
class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        lg, index = max(nums), None
        for i in range(len(nums)):
            if nums[i] == lg:
                index = i
            elif nums[i] > lg / 2:
                return -1
        return index
        
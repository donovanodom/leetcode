class Solution:
    def largestUniqueNumber(self, nums: List[int]) -> int:
        i = len(nums) - 1
        seen = set()
        lg = -1
        while i >= 0:
            if nums.index(nums[i]) == i and nums[i] not in seen:
                lg = max(lg,nums[i])
            seen.add(nums[i])
            i -= 1
        return lg
        
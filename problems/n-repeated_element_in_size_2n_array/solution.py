class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        n, obj = len(nums) / 2, dict()
        for num in nums:
            if num not in obj:
                obj[num] = 0
            obj[num] += 1
            if obj[num] == n:
                return num

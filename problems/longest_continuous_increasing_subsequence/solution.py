class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        ans = 1
        longest = 1
        for i in range(len(nums)-1):
            if nums[i] < nums[i+1]:
                ans += 1
                longest = max(ans,longest)
            else:
                ans = 1
        return longest
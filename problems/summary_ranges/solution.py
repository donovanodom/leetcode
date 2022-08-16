class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        i = 0
        ans = list()
        while i < len(nums):
            j = i + 1
            if i != len(nums) - 1 and nums[i] + 1 == nums[j]:
                txt = '{}->{}'
                while j < len(nums) and nums[j] - 1 == nums[j - 1]:
                    j += 1
                ans.append(txt.format(nums[i],nums[j-1]))
                i = j
            else:
                ans.append(str(nums[i]))
                i += 1
        return ans
        
        
# const summaryRanges = function(nums) {
#     let i = 0, answer = []
#     while(i < nums.length){
#         let j = i + 1
#         if(nums[i] + 1 == nums[j]){
#             while(nums[j] - 1 == nums[j - 1]){
#                 j++
#             }
#             answer.push(`${nums[i]}->${nums[j - 1]}`)
#             i = j
#         }else{
#             answer.push(`${nums[i]}`)
#             i++
#         }
#     }
#     return answer
# }
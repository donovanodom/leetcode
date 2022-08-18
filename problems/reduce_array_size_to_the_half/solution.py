class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        obj = dict()
        l = 0
        ans = 0
        for num in arr:
            if not num in obj:
                obj[num] = 0
            obj[num] += 1
        vals = list(obj.values())
        vals.sort()
        while l < len(arr) / 2:
            l += vals.pop(-1)
            ans += 1
        return ans
class Solution:
    def arraysIntersection(self, arr1: List[int], arr2: List[int], arr3: List[int]) -> List[int]:
        set2, set3, ans = set(arr2), set(arr3), list()
        for num in arr1:
            if num not in set2 or num not in set3:
                continue
            ans.append(num)
        return ans
        
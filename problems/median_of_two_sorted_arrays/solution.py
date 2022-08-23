class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if not nums1:
            merged = nums2
        elif not nums2:
            merged = nums1
        else:
            merged = nums1 + nums2
        merged.sort()
        l = len(merged)
        if l % 2 != 0:
            return merged[floor(l/2)]
        else:
            return (merged[floor(l/2)] + merged[floor(l/2) - 1]) / 2
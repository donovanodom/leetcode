const merge = (nums1, m, nums2, n) => {
    nums1.splice(nums1.length - n, n, ...nums2)
    nums1.sort(function(a,b){return a - b})
}
const findDifference = function(nums1, nums2) {
    let set1 = new Set([...nums1]), set2 = new Set([...nums2]), ans = [[],[]]
    nums1 = [...new Set(nums1)]
    nums2 = [...new Set(nums2)]
    for(const num of nums1){
        if(!set2.has(num)) ans[0].push(num)
    }
    for(const num of nums2){
        if(!set1.has(num)) ans[1].push(num)
    }
    return ans
}
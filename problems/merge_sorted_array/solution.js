const merge = (nums1, m, nums2, n) => {
    let pointer = 0
    for(const i in nums1){
        if(nums1[i] == 0 && pointer < n){
            nums1[i] = nums2[pointer]
            pointer++
        }
    }
    nums1.sort(function(a,b){return a - b})
}
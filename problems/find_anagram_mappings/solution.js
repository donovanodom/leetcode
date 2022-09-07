const anagramMappings = function(nums1, nums2) {
    let obj = {}, res = []
    for(i = 0; i < nums2.length; i++){
        obj[nums2[i]] = i
    }
    for(const num of nums1){
        res.push(obj[num])
    }
    return res
}  
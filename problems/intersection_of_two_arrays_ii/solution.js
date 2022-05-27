const intersect = (nums1, nums2) => {
    nums1.sort((a,b) => a - b)
    nums2.sort((a,b) => a - b)
    let answer = [], i = 0, j = 0
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]) i++
        if(nums2[j] < nums1[i]) j++
        if(nums1[i] == nums2[j]){
            answer.push(nums1[i])
            i++
            j++
        } 
    }
    return answer
}
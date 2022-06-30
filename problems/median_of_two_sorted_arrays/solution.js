const findMedianSortedArrays = (nums1, nums2) => {
    let merged = []
    if(!nums1) merged = nums2
    if(!nums2) merged = nums1
    if(nums1 && nums2) merged = [...nums1, ...nums2]
    merged.sort((a,b)=>{return a-b})
    const len = merged.length
    if(len % 2 != 0){
        let i = len / 2
        return merged[Math.floor(i)]
    }else{
        let i = Math.floor(len / 2)
        let j = i - 1
        return (merged[i] + merged[j]) / 2
    }
}

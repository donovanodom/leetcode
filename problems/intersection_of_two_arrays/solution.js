const intersection = function(nums1, nums2) {
    let answer = []
    for(const char of nums1){
        if(nums2.indexOf(char) >= 0 && answer.indexOf(char) < 0) answer.push(char)
    }
    return answer
}
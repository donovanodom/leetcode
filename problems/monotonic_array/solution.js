const isMonotonic = function(nums) {
    let mono = ''
    for(i = 1; i < nums.length; i++){
        if(nums[i] > nums[i - 1]){
            if(mono == '') mono = 'increasing'
            if(mono != 'increasing') return false
        }else if(nums[i] < nums[i - 1]){
            if(mono == '') mono = 'decreasing'
            if(mono != 'decreasing') return false
        }
    }
    return true
}
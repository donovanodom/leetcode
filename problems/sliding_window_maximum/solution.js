const maxSlidingWindow = (nums, k) => {
    if(k > nums.length || k === 0) return []
    let res = [], max = -1
    for(i = 0, j = k - 1; j < nums.length; i++, j++){
        if(max < i){
            let pointer = i
            for(k = i; k <= j; k++){
                if(nums[k] > nums[pointer]) pointer = k
            }
            max = pointer
        }
        if(nums[j] > nums[max]) max = j
        res.push(nums[max])
    }
    return res
}
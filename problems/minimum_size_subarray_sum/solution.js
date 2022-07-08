const minSubArrayLen = (target, nums) => {
    let q = [], sum = 0, min = Infinity
    for(i = 0; i < nums.length; i++){  
        q.push(nums[i])
        sum += nums[i]
        if(sum < target){
            continue
        }else{
            while(sum >= target){
                min = Math.min(q.length, min)
                sum -= q.shift()
            }
        }
        if(min == 1) break
    }
    return min == Infinity ? 0 : min
}
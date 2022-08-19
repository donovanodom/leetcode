const isPossible = (nums) => {
    let n = nums.length, count = {}, map = {}
    for(i = 0; i < n; i++){
        if(!count[nums[i]]) count[nums[i]] = 0
        count[nums[i]]++
        map[nums[i]] = 0
    }
    for(i = 0; i < n; i++){
        if(count[nums[i]] == 0) continue
        count[nums[i]]--
        if(map[nums[i] - 1] > 0){
            map[nums[i] - 1]--
            map[nums[i]]++
        }else if(count[nums[i] + 1] > 0 && count[nums[i] + 2] > 0){
            count[nums[i] + 1]--
            count[nums[i] + 2]--
            map[nums[i] + 2]++
        }else{
            return false
        }
    }
    return true
    
}
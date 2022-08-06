const containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    for(i = 0; i < nums.length; i++){
        if(!map.has(nums[i])) map.set(nums[i],[])
         map.get(nums[i]).push(i)
    }
    for(const [key, indexes] of map){
        if(indexes.length < 2) continue
        for(i = 0; i < indexes.length - 1; i++){
            if(indexes[i + 1] - indexes[i] <= k) return true
        }
    }
    return false
}
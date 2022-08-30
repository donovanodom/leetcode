const findShortestSubArray = function(nums) {
    let obj = {}, max = 0
    for(i = 0; i < nums.length; i++){
        if(!obj[nums[i]]) obj[nums[i]] = [0,[]]
        obj[nums[i]][0]++
        obj[nums[i]][1].push(i)
        max = Math.max(obj[nums[i]][0],max)
    }
    
    let indicies = Object.keys(obj).filter((key) => {
        return obj[key][0] == max
    })
    let min = Infinity
    for(const key of indicies){
        let left = Math.min(...obj[key][1]), right = Math.max(...obj[key][1])
        min = Math.min(right-left+1,min)
    }
    return min
}
const findLHS = function(nums) {
    let max = 0, i = 0
    nums.sort((a,b) => a - b)
    while(i < nums.length){
        let j = i + 1
        while(nums[i] == nums[j] && j < nums.length){
            j++
        }
        let sub = nums.slice(i,j + 1)
        while(Math.abs(Math.max(...sub) - Math.min(...sub)) <= 1 && j < nums.length){
            max = Math.max(sub.length, max)
            j++
            sub = nums.slice(i,j + 1)
        }
        i++
    }
    return max
}
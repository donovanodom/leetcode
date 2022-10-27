const singleNumber = function(nums) {
    let seen = new Set(), i = 0
    while(i < nums.length){
        const temp = nums[i]
        if(!seen.has(temp)){
            seen.add(temp)
            nums.splice(i,1)
            if(!nums.includes(temp)) return temp
        }else{
            i++
        }
    }
}
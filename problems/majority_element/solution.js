const majorityElement = (nums) => {
    let i = 0, candidate, count = 0
    while(i < nums.length){
        if (count === 0){
            candidate = nums[i]
            count = 1
        }
        else{
            if (nums[i] === candidate) count++
            else count--
        }
        i++
    }
    return candidate
}


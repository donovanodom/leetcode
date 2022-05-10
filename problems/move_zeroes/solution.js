const moveZeroes = (nums) => {
    let pointer = 0
    for (i = 0; i < nums.length; i++){
        if (nums[i] != 0){
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
            pointer++
        }
    }
}
const removeDuplicates = function(nums) {
    let i = 0
    while(i < nums.length){
        let j = i + 1
        while(nums[i] == nums[j]) j++
        if(j - 1 > 1){
            while(i < j - 2){
                nums.splice(i,1)
                j--
            }
        }
        i = j
    }
}
const sortColors = (nums) => {
    let unsorted = true
    while(unsorted){
        unsorted = false
        let i = 0
        while(i < nums.length - 1){
            if(nums[i] > nums[i + 1]){
                const temp = nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = temp
                unsorted = true
            }
            i++
        }
    }
}
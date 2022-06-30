const twoSum = (nums, target) => {
    if(nums.length == 2) return [0,1]
    let vals = new Map()
    for(num=0;num < nums.length;num++){
        let num2 = target - nums[num]
        if(vals.has(num2)) return [vals.get(num2),num]
        vals.set(nums[num], num)
    }
}
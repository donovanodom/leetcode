const arrayPairSum = (nums) => {
    nums.sort((a,b) => b - a)
    let sum = 0
    for(i = 1; i < nums.length; i += 2){
        sum += nums[i]
    }
    return sum
}
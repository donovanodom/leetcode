const secondHighest = function(s) {
    let nums = []
    for(const char of s){
        if(/\d/.test(char)) nums.push(Number(char))
    }
    nums = [...new Set(nums)]
    if(nums.length < 2) return -1
    nums.sort((a,b) => b - a)
    return nums[1]
}
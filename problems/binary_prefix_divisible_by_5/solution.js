const prefixesDivBy5 = function(nums) {
    let ans = [], sum = 0
    for(const num of nums){
        sum = (sum * 2 + num) % 5
        sum ? ans.push(false) : ans.push(true)
    }
    return ans
}
const findErrorNums = function(nums) {
    let ans = [], check = Array(nums.length).fill(0)
    for(const num of nums){
        if(check[num - 1]) ans.push(num)
        check[num - 1] = 1
    }
    for(i = 0; i < check.length; i++){
        if(!check[i]) ans.push(i+1)
    }
    return ans
}
const sortArrayByParityII = function(nums) {
    let odd = [], even = [], ans = []
    for(i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            even.push(nums[i])
        }else{
            odd.push(nums[i])
        }
    }
    for(i = 0; i < nums.length; i++){
        if(i % 2 == 0){
            ans.push(even.pop())
        }else{
            ans.push(odd.pop())
        }
    }
    return ans
}

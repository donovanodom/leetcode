const reformatNumber = function(number) {
    let nums = ''
    for(const num of number){
        if(/\d/.test(num)) nums += num
    }
    let ans = ''
    while(nums.length){
        if(nums.length > 4){
            ans += nums.slice(0,3) + '-'
            nums = nums.slice(3)
        }else if(nums.length == 4){
            ans += nums.slice(0,2) + '-' + nums.slice(2)
            nums = ''
        }else{
            ans += nums
            nums = ''
        }
    }
    return ans
}
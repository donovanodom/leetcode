const findDisappearedNumbers = function(nums) {
    let n = nums.length, ans = [], i = 1
    while(i < n + 1){
        if(nums.indexOf(i) < 0) ans.push(i)
        i++
    }
    return ans
}
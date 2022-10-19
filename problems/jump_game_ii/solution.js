const jump = function(nums) {
    let target = nums.length, cur = 0, prev = 0, moves = 0
    let i = 0
    while(i < nums.length - 1){
        cur = Math.max(cur,i + nums[i])
        if(i == prev){
            moves++
            prev = cur
        }
        i++
    }
    return moves
}

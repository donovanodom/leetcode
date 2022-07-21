const decompressRLElist = function(nums) {
    if(nums.length == 2) return Array(nums[0]).fill(nums[1])
    let answer = [], l = 0, r = nums.length - 2
    while(l < r){          
        if(l < r && r - 4 >= l){
            answer = [...answer,...Array(nums[l]).fill(nums[l+1])]
            l += 2
        }else{
            answer = [...answer,...Array(nums[l]).fill(nums[l+1]),...Array(nums[r]).fill(nums[r+1])]
            r -= 2
            l += 2
        }
        
    }
    return answer
};
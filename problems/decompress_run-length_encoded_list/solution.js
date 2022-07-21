const decompressRLElist = function(nums) {
    let answer = []
    for(i = 0; i < nums.length; i += 2){       
        answer = [...answer,...Array(nums[i]).fill(nums[i+1])]
    }
    return answer
};
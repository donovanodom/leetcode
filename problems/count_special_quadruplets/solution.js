const countQuadruplets = function(nums) {
    let ans = 0, i = 0
    while(i < nums.length){
        let j = i + 1
        while(j < nums.length){
            let k = j + 1 
            while(k < nums.length){
                let l = k + 1
                while(l < nums.length){
                    if(nums[i] + nums[j] + nums[k] == nums[l]) ans++
                    l++
                }
                k++
            }
            j++
        }
        i++
    }
    return ans
}
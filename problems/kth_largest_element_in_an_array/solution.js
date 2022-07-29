const findKthLargest = function(nums, k) {
    const obj = {}
    let answer 
    k = nums.length - k + 1
    for(let num of nums){
        num += 10000
        if(!obj[num]) obj[num] = 0
        obj[num]++
    }
    Object.keys(obj).forEach((num) => {
        while(obj[num]){
            obj[num]--
            k--
            if(k == 0) answer = Number(num) - 10000
        }   
    })
    return answer
}
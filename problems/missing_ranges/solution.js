const findMissingRanges = function(nums, lower, upper) {
    let answer = [], start = lower
    for(const num of nums){
        if(start < num) start == num - 1 ? answer.push(`${start}`) : answer.push(`${start}->${num - 1}`)
        start = num + 1
    }
    if(start <= upper) start == upper ? answer.push(`${start}`) : answer.push(`${start}->${upper}`)
    return answer
}
const smallestRangeI = function(nums, k) {
    let min = Math.min(...nums), max = Math.max(...nums)
    if(min + k >= max - k) return 0
    return (max - k) - (min + k)
}
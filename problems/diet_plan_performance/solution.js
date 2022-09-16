const dietPlanPerformance = function(calories, k, lower, upper) {
    let p = 0, sum = calories.slice(0,k).reduce((a,b) => a + b)
    if(sum < lower) p--
    if(sum > upper) p++
    for(i = k; i < calories.length; i++){
        sum -= calories[i - k]
        sum += calories[i]
        if(sum < lower) p--
        if(sum > upper) p++
    }
    return p
}
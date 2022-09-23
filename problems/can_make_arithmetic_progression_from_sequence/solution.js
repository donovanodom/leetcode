const canMakeArithmeticProgression = function(arr) {
    let set = new Set([...arr]), max = Math.max(...arr), min = Math.min(...arr), dif = (max - min) / (arr.length - 1)
    for(i = min; i < max; i += dif){
        if(!set.has(i)) return false
    }
    return true
}
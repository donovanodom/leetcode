const findGCD = function(nums) {
    let min = Math.min(...nums), max = Math.max(...nums), i = min
    while(i > 0){
        if(min % i == 0 && max % i == 0) return i
        i--
    }
}
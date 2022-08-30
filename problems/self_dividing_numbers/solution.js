const selfDividingNumbers = function(left, right) {
    let ans = []
    for(let i = left; i <= right; i++){
        let isSelfDividing = true
        for(const char of String(i)){
            if(Number(char) == 0 || i % Number(char) != 0) isSelfDividing = false
        }
        if(isSelfDividing) ans.push(i)
    }
    return ans
}
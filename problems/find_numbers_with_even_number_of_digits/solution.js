const findNumbers = function(nums) {
    let count = 0
    for(const num of nums){
        if(isEven(num)) count++
    }
    return count
}

const isEven = (num) => {
    return num > 9 && num < 100 || num > 999 && num < 10000 || num > 99999
}
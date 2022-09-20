const checkIfExist = function(arr) {
    let count = 0, zeroes = 0
    for(const num of arr){
        if(!num) zeroes++
        if(num && arr.includes(num / 2)) return true
    }
    return zeroes > 1
}
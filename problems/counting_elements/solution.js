const countElements = function(arr) {
    let set = new Set([...arr]), count = 0
    for(const num of arr){
        if(set.has(num + 1)) count++
    }
    return count
}
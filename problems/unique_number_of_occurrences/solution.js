const uniqueOccurrences = function(arr) {
    let occ = {}
    for(i = 0; i < arr.length; i++){
        if(!occ[arr[i]]) occ[arr[i]] = 0
        occ[arr[i]]++
    }
    const len = Object.keys(occ).length
    return [...new Set(Object.keys(occ).map((key) => occ[key]))].length == len
}
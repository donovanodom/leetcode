const countGoodSubstrings = function(s) {
    let count = 0
    for(i = 0; i < s.length - 2; i++){
        if([...new Set(s.slice(i, i + 3).split(''))].length == 3) count++
    }
    return count
};
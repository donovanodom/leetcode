const canTransform = function(start, end) {
    let i = 0, j = 0
    while(i < start.length || j < end.length){
        if(start[i] == 'X'){
            i++
            continue
        }
        if(end[j] == 'X'){
            j++
            continue
        }
        if(start[i] != end[j]) return false
        if(start[i] == 'R' && i > j) return false
        if(start[i] == 'L' && j > i) return false
        i++
        j++
    }
    return true
}
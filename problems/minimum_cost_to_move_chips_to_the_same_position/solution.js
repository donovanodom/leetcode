const minCostToMoveChips = function(position) {
    let e = 0, o = 0
    for(const p of position){
        if(p % 2 != 0) o++
        else e++
    }
    return Math.min(e,o)
}
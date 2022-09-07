const numJewelsInStones = function(jewels, stones) {
    let set = new Set(), res = 0
    for(const jewel of jewels){
        set.add(jewel)
    }
    for(const stone of stones){
        if(set.has(stone)) res++
    }
    return res
}
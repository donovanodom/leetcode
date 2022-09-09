const hasGroupsSizeX = function(deck) {
    if(deck.length == 1) return false
    const obj = {}
    for(const card of deck){
        if(!obj[card]) obj[card] = 0
        obj[card]++
    }
    let min = Infinity, sizes = []
    Object.keys(obj).forEach((key) => {
        min = Math.min(min, obj[key])
        sizes.push(obj[key])
    })
    if(min < 2) return false
    return odd(min, sizes) || even(min, sizes)
}

const even = (min, sizes) => {
    while(min % 2 == 0 && min / 2 > 1){
        min = min / 2
    }
    for(const size of sizes){
        if(size % min != 0) return false
    }
    return true
}

const odd = (min, sizes) => {
    while(min % 3 == 0 && min / 3 > 1){
        min = min / 3
    }
    for(const size of sizes){
        if(size % min != 0) return false
    }
    return true
}
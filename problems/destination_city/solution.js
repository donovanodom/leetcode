const destCity = function(paths) {
    let inC = [], outC = []
    for(const [s, d] of paths){
        outC.push(s)
        inC.push(d)
    }
    for(const c of inC){
        if(!outC.includes(c)) return c
    }
}